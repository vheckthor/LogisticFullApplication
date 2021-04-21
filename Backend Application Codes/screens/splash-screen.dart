import 'package:flutter/material.dart';
import 'package:translog/screens/size_config.dart';
import 'body.dart';

class SplashScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //you have to call it on your starting screen
    SizeConfig().init(context);
    return Scaffold(
      body: Body(),
    );
  }
}
