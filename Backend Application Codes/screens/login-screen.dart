import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:translog/pallete.dart';
import 'package:translog/screens/signup-screen.dart';

class LoginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          decoration: BoxDecoration(
              image: DecorationImage(
                  image: AssetImage('assets/images/login_bg.png'),
                  fit: BoxFit.cover,
                  colorFilter:
                      ColorFilter.mode(Colors.black54, BlendMode.darken))),
        ),
        Scaffold(
          backgroundColor: Colors.transparent,
          body: Column(
            children: [
              Flexible(
                child: Center(
                  child: Text(
                    'Transis',
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: 60,
                        fontWeight: FontWeight.bold),
                  ),
                ),
              ),
              Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10.0),
                  child: Container(
                    height: 70,
                    decoration: BoxDecoration(
                        color: Colors.grey[500].withOpacity(0.5),
                        borderRadius: BorderRadius.circular(16)),
                    child: TextField(
                      decoration: InputDecoration(
                          border: InputBorder.none,
                          prefixIcon: Icon(
                            FontAwesomeIcons.envelope,
                            size: 30,
                            color: kWhite,
                          ),
                          hintText: 'Email',
                          hintStyle: kBodyText),
                      style: kBodyText,
                      keyboardType: TextInputType.emailAddress,
                      textInputAction: TextInputAction.next,
                    ),
                  )),
              Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10.0),
                  child: Container(
                    height: 70,
                    decoration: BoxDecoration(
                        color: Colors.grey[500].withOpacity(0.5),
                        borderRadius: BorderRadius.circular(16)),
                    child: TextField(
                      decoration: InputDecoration(
                          border: InputBorder.none,
                          prefixIcon: Icon(
                            FontAwesomeIcons.lock,
                            size: 30,
                            color: kWhite,
                          ),
                          hintText: 'Password',
                          hintStyle: kBodyText),
                      style: kBodyText,
                      obscureText: true,
                      keyboardType: TextInputType.text,
                      textInputAction: TextInputAction.done,
                    ),
                  )),
              GestureDetector(
                onTap: () => Navigator.pushNamed(context, '/ForgetPassword'),
                child: Text(
                  'Forget Password',
                  style: kBodyText,
                ),
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                  height: 70,
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10), color: kBlue),
                  child: FlatButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) {
                            return SignupScreen();
                          },
                        ),
                      );
                    },
                    child: Text('Login', style: kBodyText),
                  )),
              SizedBox(
                height: 20,
              ),
              Container(
                child: Text(
                  'Create New Account',
                  style: kBodyText,
                ),
                decoration: BoxDecoration(
                    border:
                        Border(bottom: BorderSide(width: 1, color: kWhite))),
              ),
              SizedBox(
                height: 20,
              ),
            ],
          ),
        )
      ],
    );
  }
}
