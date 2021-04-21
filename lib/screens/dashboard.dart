import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class dashboard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    /*return Padding(
      padding: const EdgeInsets.all(5.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Container(
            // margin: EdgeInsets.all(50.0),
            padding: EdgeInsets.all(50.0),
            decoration: BoxDecoration(color: Colors.white),
            child: Center(
              child: Text(
                'Hello World',
                //textDirection: TextDirection.ltr,
                style: TextStyle(
                  fontSize: 32,
                  color: Colors.orange,
                ),
              ),
            ),
          ),
          SizedBox(
            height: 100,
          ),
          Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Container(
              color: Colors.pinkAccent,
              child: Center(
                child: Text(
                  "Hi, Timmy \nWelcome to Transis",
                  style: TextStyle(
                    color: Colors.orange,
                    fontSize: 50,
                    //background: Color(#0EA34E
                  ),
                ),
              ),
            ),
          ]),
          Text(
            "What Would you like to do?",
            style: TextStyle(backgroundColor: Colors.indigo),
          ),
        ],
      ),
    );*/
    //final String svgAssetName = '"assets/images/path.svg"assets/image.svg';
    var size = MediaQuery.of(context).size;
    return Container(
      color: Colors.white,
      child: Column(
        children: [
          Container(
              height: size.height * .45,
              decoration: BoxDecoration(color: Colors.pink),
              child: Center(
                child: Column(
                  children: [
                    Container(
                      padding: EdgeInsets.only(top: 130.0),
                      child: Center(
                        child: Column(
                          children: [
                            Text(
                              'Hi, Sandra',
                              textDirection: TextDirection.ltr,
                              style: TextStyle(
                                fontSize: 50,
                                fontWeight: FontWeight.bold,
                                decoration: TextDecoration.none,
                                color: Colors.white,
                              ),
                            ),
                            Text(
                              "Welcome to Transis",
                              style: TextStyle(
                                  fontSize: 25,
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold,
                                  decoration: TextDecoration.none),
                            ),
                            Text(""),
                            Text(""),
                          ],
                        ),
                      ),
                    ),
                    Expanded(
                        child: GridView.count(
                      crossAxisCount: 2,
                      children: <Widget>[
                        Container(
                          decoration: BoxDecoration(
                            color: Colors.pink,
                            borderRadius: BorderRadius.circular(13),
                          ),
                          child: Column(
                            children: <Widget>[
                              SvgPicture.asset("assets/images/path.svg")
                            ],
                          ),
                        )
                      ],
                    )),
                    Container(
                      decoration: BoxDecoration(color: Colors.white),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Expanded(
                              child: Container(
                            // color: Colors.grey,
                            padding: EdgeInsets.all(20),
                            margin: EdgeInsets.all(10),
                            decoration: BoxDecoration(
                                color: Colors.redAccent,
                                shape: BoxShape.rectangle,
                                borderRadius: BorderRadius.only(
                                    topLeft: Radius.circular(25.0),
                                    topRight: Radius.circular(25.0),
                                    bottomLeft: Radius.circular(25.0),
                                    bottomRight: Radius.circular(25.0))),
                            child: Column(
                              children: [
                                FlatButton(
                                  onPressed: () {},
                                  child: Column(
                                    children: <Widget>[
                                      SvgPicture.asset(
                                          "assets/images/Path.svg"),
                                      // Image.asset("assets/images/path.svg"),
                                      //Icon(Icons.car_rental),
                                      Text("Add")
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          )),
                          Expanded(
                              child: Container(
                            color: Colors.black,
                            margin: EdgeInsets.all(20),
                            child: Text(
                              "hey you going",
                              style: TextStyle(decoration: TextDecoration.none),
                            ),
                          )),
                        ],
                      ),
                    )
                  ],
                ),
              )),
        ],
      ),
    );
  }
}
