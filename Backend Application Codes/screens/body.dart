import 'package:flutter/material.dart';
import 'package:translog/pallete.dart';
import 'package:translog/screens/login-screen.dart';
import 'package:translog/screens/size_config.dart';
import 'splash-content.dart';

class Body extends StatefulWidget {
  @override
  _BodyState createState() => _BodyState();
}

class _BodyState extends State<Body> {
  int currentPage = 0;
  List<Map<String, String>> splashData = [
    {
      "text": "welcome to Transi Logistics",
      "image": "assets/images/OnBoarding1.png"
    },
    {
      "text": "welcome to hjbhjnbhjTransi Logistics",
      "image": "assets/images/OnBoarding2.png"
    },
    {
      "text": "welcome to jnhjn n Transi Logistics",
      "image": "assets/images/OnBoarding3.png"
    }
  ];
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SizedBox(
        width: double.infinity,
        height: double.infinity,
        child: Column(
          children: <Widget>[
            Expanded(
                flex: 3,
                child: PageView.builder(
                    onPageChanged: (value) {
                      setState(() {
                        currentPage = value;
                      });
                    },
                    itemCount: splashData.length,
                    itemBuilder: (context, index) => SplashContent(
                          image: splashData[index]["image"],
                          text: splashData[index]['text'],
                        ))),
            Expanded(
              flex: 2,
              child: Padding(
                padding: EdgeInsets.symmetric(
                    horizontal: getProportionateScreenHeight(100)),
                child: Column(
                  children: <Widget>[
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: List.generate(
                          splashData.length, (index) => buildDot(index)),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    RoundedButton(
                      text: "Get Started",
                    )
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }

  AnimatedContainer buildDot(int index) {
    return AnimatedContainer(
      duration: KAnimationDuration,
      margin: EdgeInsets.only(right: 5),
      height: 6,
      width: currentPage == index ? 20 : 6,
      decoration: BoxDecoration(
          color: currentPage == index ? kPrimaryColor : Color(0xFFD8D8D8),
          borderRadius: BorderRadius.circular(5)),
    );
  }
}

class RoundedButton extends StatelessWidget {
  final String text;
  final String press;
  final Color color;
  const RoundedButton({
    Key key,
    this.text,
    this.press,
    this.color = kPrimaryColor,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      height: getProportionateScreenHeight(58),
      child: TextButton(
          // shape:
          //    RoundedRectangleBorder(borderRadius: BorderRadius.circular(50)),
          //color: kPrimaryColor,
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) {
                  return LoginScreen();
                },
              ),
            );
          },
          child: Text(
            text,
            style: TextStyle(
              fontSize: getProportionateScreenWidth(18),
              color: Colors.orange,
            ),
          )),
    );
  }
}
