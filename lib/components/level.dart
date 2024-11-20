import 'dart:async';

import 'package:black_cube/black_cube.dart';
import 'package:black_cube/components/collision_block.dart';
import 'package:black_cube/components/player.dart';
import 'package:black_cube/components/player2.dart';
import 'package:flame/components.dart';
import 'package:flame_tiled/flame_tiled.dart';
import 'package:flame/parallax.dart';
import 'package:flutter/painting.dart';

class Level extends World with HasGameRef<BlackCubeGame> {
  static late Level instance;
  final String levelName;
  late TextComponent player1Life;
  late TextComponent player2Life;
  final Player player1;
  final Player2 player2;
  Level({
    required this.levelName,
    required this.player1,
    required this.player2,
  }) {
    instance = this;
  }
  late TiledComponent level;
  List<CollisionBlock> collisionBlocks = [];
  double scrollSpeed = 40;

  @override
  FutureOr<void> onLoad() async {
    level = await TiledComponent.load('$levelName.tmx', Vector2.all(16));
    add(level);
    _scrollingBackground();
    _spawningObjects();
    _addCollisions();
    player1Life = TextComponent(text: "${player1.character}: ${player1.life}", position: Vector2(50, level.y));
    player2Life = TextComponent(text: "${player2.character}: ${player2.life}", position: Vector2(level.x + 450, level.y));
    add(player1Life);
    add(player2Life);
    return super.onLoad();
  }

  void _scrollingBackground() async {
    var backgroundLayer = await gameRef.loadParallaxComponent(
      [
        ParallaxImageData('Background/industry/1.png'),
        ParallaxImageData('Background/industry/2.png'),
        ParallaxImageData('Background/industry/3.png'),
        ParallaxImageData('Background/industry/4.png')
      ],
      baseVelocity: Vector2(0, 0),
      repeat: ImageRepeat.repeat,
      fill: LayerFill.none,
      priority: -10,
    );
    add(backgroundLayer);
  }

  void _spawningObjects() {
    final spawnPointsLayer = level.tileMap.getLayer<ObjectGroup>('Spawnpoints');

    if (spawnPointsLayer != null) {
      for (final spawnPoint in spawnPointsLayer.objects) {
        switch (spawnPoint.class_) {
          case 'Player':
            player1.position = Vector2(spawnPoint.x, spawnPoint.y);
            player1.scale.x = 1;
            add(player1);
            player2.position = Vector2.copy(player1.position);
            player2.x += 400;
            player2.y -= 100;
            add(player2);
            break;
          // case 'Fruit':
          //   final fruit = Fruit(
          //     fruit: spawnPoint.name,
          //     position: Vector2(spawnPoint.x, spawnPoint.y),
          //     size: Vector2(spawnPoint.width, spawnPoint.height),
          //   );
          //   add(fruit);
          //   break;
          // case 'Saw':
          //   final isVertical = spawnPoint.properties.getValue('isVertical');
          //   final offNeg = spawnPoint.properties.getValue('offNeg');
          //   final offPos = spawnPoint.properties.getValue('offPos');
          //   final saw = Saw(
          //     isVertical: isVertical,
          //     offNeg: offNeg,
          //     offPos: offPos,
          //     position: Vector2(spawnPoint.x, spawnPoint.y),
          //     size: Vector2(spawnPoint.width, spawnPoint.height),
          //   );
          //   add(saw);
          //   break;
          // case 'Checkpoint':
          //   final checkpoint = Checkpoint(
          //     position: Vector2(spawnPoint.x, spawnPoint.y),
          //     size: Vector2(spawnPoint.width, spawnPoint.height),
          //   );
          //   add(checkpoint);
          //   break;
          // case 'Chicken':
          //   final offNeg = spawnPoint.properties.getValue('offNeg');
          //   final offPos = spawnPoint.properties.getValue('offPos');
          //   final chicken = Chicken(
          //     position: Vector2(spawnPoint.x, spawnPoint.y),
          //     size: Vector2(spawnPoint.width, spawnPoint.height),
          //     offNeg: offNeg,
          //     offPos: offPos,
          //   );
          //   add(chicken);
          //   break;
          default:
        }
      }
    }
  }

  void _addCollisions() {
    final collisionsLayer = level.tileMap.getLayer<ObjectGroup>('Collisions');

    if (collisionsLayer != null) {
      for (final collision in collisionsLayer.objects) {
        switch (collision.class_) {
          case 'Platform':
            final platform = CollisionBlock(
              position: Vector2(collision.x, collision.y),
              size: Vector2(collision.width, collision.height),
              isPlatform: true,
            );
            collisionBlocks.add(platform);
            add(platform);
            break;
          default:
            final block = CollisionBlock(
              position: Vector2(collision.x, collision.y),
              size: Vector2(collision.width, collision.height),
            );
            collisionBlocks.add(block);
            add(block);
        }
      }
    }
    player1.collisionBlocks = collisionBlocks;
    player2.collisionBlocks = collisionBlocks;
  }
}
