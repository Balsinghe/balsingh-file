import React from 'react'
import { StyleSheet, Text, View ,ScrollView ,Image,} from 'react-native'
import card from "../parkqwik/assets/images/card.png"
import profile from "../parkqwik/assets/images/profile.png"
import addvec from "../myapp/assets/images/addvec.png"
import nearby from "../parkqwik/assets/images/nearby.png"
import Ev from "../parkqwik/assets/images/Ev.png"
import wash from "../parkqwik/assets/images/wash.png"
import insurance from "../parkqwik/assets/images/insurance.png"
import road from "../parkqwik/assets/images/road.png"
import pay from "../parkqwik/assets/images/pay.png"
import toll from "../parkqwik/assets/images/toll.png"
import parking from "../parkqwik/assets/images/parking.png"
import chassis from "../parkqwik/assets/images/chassis.png"
import recharge from "../parkqwik/assets/images/recharge.png"
import netc from "../parkqwik/assets/images/netc.png"
import netcdot from "../parkqwik/assets/images/netcdot.png"
import bb from "../parkqwik/assets/images/bb.png"
import round from "../parkqwik/assets/images/round.png"
import {Card} from "react-native-paper"


const home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.CardBtn}>
          <View>
            <Image source={profile} style={{

position: 'absolute',
width: '51px',
height: '51px',
left: '14px',
top: '25px',

}}/>
</View>
<View>
  <Image source={addvec} style={{

position: 'absolute',
 width: '100px',
 height: '40px',
left: '130px',
 top: '30px',
 borderRadius:'50px',

}}/>
</View>
<View>
  <Image source={round} style={{

position: 'absolute',
 left: '70%',
 top: '34px',
 width:35,
 height:30,
 borderRadius:17,
bottom: '65%',
  }}/>
</View>
 </Card>
 <View>
        <Card style={styles.CardBtn1}>
        <Text style={{position: 'absolute',
width: '90px',
height: '17px',
top: '17px',
left: '20px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '24px',
}}>Services</Text>
<View>
  <Image source={card} style={{
position: 'absolute',
// width: '51px',
// height: '41px',
left: '30px',
 top: '40px',
}}/>
</View>

<View>
  <Image source={nearby} style={{ 
position: 'absolute',
width: '28px',
height: '28px',
left: '46px',
top: '50px',
}}/>
</View>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '36px',
top: '90px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}>Nearby </Text>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '36px',
top: '105px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}>Parking </Text>
<View>
  <Image source={card} style={{
position: 'absolute',
left: '100px',
 top: '40px',
}}/>
</View>
<View>
  <Image source={Ev} style={{
position: 'absolute',
width: '28px',
height: '28px',
left: '120px',
 top: '50px',


  }}/>
</View>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '100px',
top: '100px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}>EV Parking</Text>
<View>
  <Image source={card} style={{
position: 'absolute',
left: '178px',
 top: '40px',
}}/>
</View>
<View>
  <Image source={wash} style={{

position: 'absolute',
 left: '55.14%',
 right: '40.32%',
top: 50,
}}/>
</View>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '185px',
top: '100px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}>Car wash</Text>
<View>
  <Image source={card} style={{
position: 'absolute',
// width: '51px',
// height: '41px',
left: '260px',
 top: '40px',
}}/>
</View>
<View>
<Image source={insurance} style={{

position: 'absolute',
width: '25.2px',
height: '19.6px',
left: 280,
top: 50,
}}/>
</View>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '270px',
top: '95px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}> vechile </Text>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '265px',
top: '110px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}> Insurance </Text>
<View>
  <Image source={card} style={{
position: 'absolute',
// width: '51px',
// height: '41px',
left: '30px',
 top: '167px',
}}/>
</View>
<View> 
  <Image source={road} style={{

position: 'absolute',
width: '28px',
height: '28px',
left: '45px',
top: '170px',
}}/>
</View>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '40px',
top: '208px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}> Road</Text>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '30px',
top: '223px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}> Assistance </Text>
<View>
  <Image source={card} style={{
position: 'absolute',
// width: '51px',
// height: '41px',
left: '110px',
 top: '164px',
}}/>
</View>
<View>
  <Image source={pay} style={{

position: 'absolute',
width: '28px',
height: '28px',
left: '125px',
top: '170px',
 }}/>
</View>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '110px',
top: '220px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}> Pay challan</Text>
<View>
  <Image source={card} style={{
position: 'absolute',
// width: '51px',
// height: '41px',
left: '185px',
 top: '164px',
}}/>
</View>
<View>
  <Image source={toll} style={{
position: 'absolute',
width: '28px',
height: '28.33px',
left: '200px',
top: '170px',
}}/>
</View>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '205px',
top: '215px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}> Toll</Text>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '190px',
top: '230px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}> Estimator </Text>
<View>
  <Image source={card} style={{
position: 'absolute',
// width: '51px',
// height: '41px',
left: '265px',
 top: '164px',
}}/>
</View>
<View>
  <Image source={parking} style={{
position: 'absolute',
width: '28px',
height: '28.33px',
left: '280px',
top: '170px',
}}/>
</View>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '275px',
top: '215px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}> Valet</Text>
<Text style={{position: 'absolute',
width: '145px',
height: '17px',
left: '270px',
top: '230px',
fontfamily: 'Poppins',
fontstyle: 'normal',
fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}> Parking</Text>
</Card>

        <Card style={styles.CardBtn2}>
          <Text style={{

position: 'absolute',
width: '145px',
height: '17px',
left: '20px',
top: '35px',
fontfamily: 'Poppins',
fontstyle: 'normal',
 fontweight: 500,
fontsize: '16px',
lineheight: '13px',

}}>FASTag Recharge</Text>
<Text style={{
position: 'absolute',
width: '321px',
height: '326px',
left:'30px',
top: '60px',
padding:3,

background: '#FFFFFF',
// box-shadow: 0px -1px 10px rgba(199, 199, 199, 0.1), 1px 1px 10px rgba(89, 89, 89, 0.1);
// border-radius: 15px;

}}>Get up to 100% cashback on first 3 FASTag recharge</Text>
<View>
  <Image source={chassis} style={{

position: 'absolute',
width: '201px',
height: '40px',
top: '110px',
left: '25px',
}}/>
</View>
<View>
  <Image source={recharge} style={{

position: 'absolute',
width: '80px',
height: '35px',
left: '250px',
top:'114px',
borderRadius:5,
background: '#FFFFFF',
}}/>
</View>
<Text style={{position: 'absolute',
width: '321px',
height: '326px',
left:'30px',
top: '170px',


background: '#FFFFFF'

}}>Powered by</Text>
<View>
  <Image source={netc} style={{

position: 'absolute',
left: '120px',
right: '14.32%',
top: '170px',
bottom: '45.57%',
color: '#6D6E71',
}} />
</View>
<View>
  <Image source={netcdot} style={{
position: 'absolute',
left: '212px',
right: '14.32%',
top: '170px',
bottom: '45.57%',
  }}/>
</View>
<View>
  <Image source={bb} style={{
    /* g14 */

position: 'absolute',
left: '239px',
right: '3.45%',
top: '165px',
 }}/>
</View>
<Text style={{position: 'absolute',
width: '321px',
height: '326px',
left:'30px',
top: '220px',
fontSize:15,

}}>My FASTags</Text>
<Text style={{position: 'absolute',
width: '321px',
height: '326px',
left:'30px',
top: '280px',
fontSize:15,


}}>Discover</Text>
 
        </Card>
        </View>
        <Card style={styles.CardBtn3}>

        </Card>
        
      
      
      </ScrollView>

    </View>
  )
}

export default home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'ghostwhite',
    width:400,

  },
  CardBtn:{
    backgroundColor:"#1A9E75",
    height:200,
    borderBottomEndRadius:50,
    borderBottomStartRadius:50,
    borderRadius:2
   },
   CardBtn1:{
    backgroundColor:"white",
    height:270,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    borderRadius:20,
    marginHorizontal:15,
    bottom:110,
    },
   CardBtn2:{
    backgroundColor:"white",
    height:390,
    borderBottomEndRadius:50,
    borderBottomStartRadius:20,
    borderRadius:20,
    marginHorizontal:15,
    bottom:90,
    },
   CardBtn3:{
    backgroundColor:"white",
    height:390,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    borderRadius:20,
    marginHorizontal:15,
    bottom:70,
    },
});