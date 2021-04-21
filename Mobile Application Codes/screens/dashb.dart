import 'dart:ui';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter/material.dart';
import 'or.dart';

class dashb extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Container(
      color: Colors.white,
      child: Column(
        children: [
          Container(
            padding: EdgeInsets.only(top: 130.0),
            color: Colors.pink,
            height: size.height * .45,
            child: Center(
              child: Column(
                children: [
                  Text("Hi, Timmy",
                      textDirection: TextDirection.ltr,
                      style: TextStyle(
                        fontSize: 50,
                        fontWeight: FontWeight.bold,
                        decoration: TextDecoration.none,
                        color: Colors.white,
                      )),
                  Text(
                    "Welcome to Transis",
                    style: TextStyle(
                        fontSize: 25,
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                        decoration: TextDecoration.none),
                  )
                ],
              ),
            ),
          ),
          Expanded(
            child: GridView.count(
              crossAxisCount: 2,
              //crossAxisSpacing: 20,
              mainAxisSpacing: 20,
              children: <Widget>[
                CategoryCard(
                  title: "order ride",
                  svgSrc: "assets/images/Path.svg",
                  press: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) {
                        return Map();
                      }),
                    );
                  },
                ),
                CategoryCard(
                  title: "logistics",
                  svgSrc: "assets/images/Path.svg",
                  press: () {},
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}

class CategoryCard extends StatelessWidget {
  final String svgSrc;
  final String title;
  final Function press;
  const CategoryCard({Key key, this.svgSrc, this.title, this.press})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(top: 25),
      margin: EdgeInsets.all(20),
      decoration: BoxDecoration(
          color: Colors.orange, borderRadius: BorderRadius.circular(13)),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: press,
          child: Column(
            children: <Widget>[
              Text(""),
              SvgPicture.asset(
                svgSrc,
                height: 40,
              ),
              Text(title,
                  style:
                      TextStyle(fontSize: 20, decoration: TextDecoration.none)),
            ],
          ),
        ),
      ),
    );
  }
}
