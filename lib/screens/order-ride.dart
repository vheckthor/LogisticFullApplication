import 'package:flutter/material.dart';
import 'dashb.dart';

class OrderRide extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Container(
      color: Colors.grey,
      child: Column(
        children: <Widget>[
          Container(
              height: size.height * .55,
              color: Colors.white,
              child: FlatButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) {
                          return dashb();
                        },
                      ),
                    );
                  },
                  child: Text(
                    "Dashboard",
                    style: TextStyle(color: Colors.orange),
                  )))
        ],
      ),
    );
  }
}
