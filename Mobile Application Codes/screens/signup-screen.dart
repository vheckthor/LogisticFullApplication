import 'package:country_code_picker/country_code.dart';
import 'package:country_code_picker/country_code_picker.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:translog/screens/dashb.dart';
import 'package:translog/screens/size_config.dart';
import 'package:translog/pallete.dart';

class SignupScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: kWhite,
        leading: IconButton(
          onPressed: () {
            Navigator.pop(context);
          },
          icon: Icon(
            Icons.arrow_back_ios,
            color: Colors.black,
          ),
        ),
        title: Text(
          'Sign Page',
          style: TextStyle(color: Colors.black),
        ),
      ),
      body: Container(
        margin: EdgeInsets.fromLTRB(10, 10, 80, 10),
        child: Column(
          children: [
            SizedBox(
              height: 80,
            ),
            // Spacer(),
            Text(
              'Transis',
              style: TextStyle(
                  color: Colors.orange,
                  fontSize: 60,
                  fontWeight: FontWeight.bold),
            ),
            SizedBox(
              height: 80,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Expanded(
                  // height: 70,
                  child: CountryCodePicker(
                    initialSelection: 'NG',
                    enabled: false,
                  ),
                ),
                Expanded(
                  child: TextField(
                    decoration: InputDecoration(
                        prefixIcon: Icon(FontAwesomeIcons.phone,
                            size: 15, color: Colors.orange),
                        hintText: 'Phone Number',
                        hintStyle: TextStyle(color: Colors.black12)),
                    keyboardType: TextInputType.number,
                    style: TextStyle(color: Colors.black),
                    textInputAction: TextInputAction.done,
                    maxLength: 10,
                  ),
                ),
                // Expanded(
                //     child: Text(
                //   "nnnn",
                //   style: TextStyle(color: Colors.white),
                //  ))
              ],
            ),
            //Spacer(),
            SizedBox(
              height: 20,
            ),
            Row(
              children: <Widget>[
                Expanded(
                  child: Text(
                      " By continuing you will receive an \nSMS for verification. Messages \nand data rates may apply"),
                ),
              ],
            ),
            Expanded(
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
      ),
    );
  }
}
