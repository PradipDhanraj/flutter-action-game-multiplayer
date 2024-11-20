import 'package:black_cube/black_cube.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Flame.device.fullScreen();
  await Flame.device.setLandscape();

  var game = BlackCubeGame();
  runApp(GameWidget(game: kDebugMode ? BlackCubeGame() : game));
}
