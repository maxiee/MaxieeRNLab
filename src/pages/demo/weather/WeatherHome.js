import React, {Component} from 'react';
import { StyleSheet, View, TouchableHighlight, Image, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import screen from '../../../common/screen';

const weatherData = [
    { 
        key:0,
        city:"\u798f\u5dde",
        night:0,
        bg:require("./img/w2.png"),
        abs:"\u5927\u90e8\u6674\u6717",
        degree:15,
        today: {
            week:"\u661f\u671f\u516d",
            day:"\u4eca\u5929",
            high:16,
            low:14
        },
        hours:[
            {key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},
            {key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},
            {key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
            {key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
            {key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
            {key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},
            {key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},
            {key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},
            {key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},
            {key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},
            {key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},
            {key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},
            {key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},
            {key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},
            {key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},
            {key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},
            {key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},
            {key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},
            {key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},
            {key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
            {key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
            {key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
            {key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
            {key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
            {key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
            {key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
            {key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}
        ],
        days:[
            {key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},
            {key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},
            {key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},
            {key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},
            {key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},
            {key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},
            {key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},
            {key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},
            {key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}
        ],
        info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",
        rise:"06:21",
        down:"18:06",
        prop:"10%",
        humi:"94%",
        dir:"\u4e1c\u5317\u504f\u5317",
        speed:"3\u5343\u7c73\uff0f\u5c0f\u65f6",
        feel:"15\xb0",
        rain:"0.0 \u5398\u7c73",
        pres:"1,016 \u767e\u5e15",
        sight:"5.0 \u516c\u91cc",uv:"0"
    },
    {
        key:1,
        city:"\u5361\u5c14\u52a0\u91cc",
        night:1,
        bg:require("./img/w3.png"),
        abs:"\u5927\u90e8\u6674\u6717",
        degree:15,
        today:{
            week:"\u661f\u671f\u516d",
            day:"\u4eca\u5929",
            high:16,
            low:14
        },
        hours:[
            {key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},
            {key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},
            {key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
            {key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
            {key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
            {key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},
            {key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},
            {key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},
            {key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},
            {key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},
            {key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},
            {key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},
            {key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},
            {key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},
            {key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},
            {key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},
            {key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},
            {key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},
            {key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},
            {key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
            {key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
            {key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
            {key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
            {key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
            {key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
            {key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
            {key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}
        ],
        days:[
            {key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},
            {key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},
            {key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},
            {key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},
            {key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},
            {key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},
            {key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},
            {key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},
            {key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}
        ],
        info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",
        rise:"06:21",
        down:"18:06",
        prop:"10%",
        humi:"94%",
        dir:"\u4e1c\u5317\u504f\u5317",
        speed:"3\u5343\u7c73\uff0f\u5c0f\u65f6",
        feel:"15\xb0",
        rain:"0.0 \u5398\u7c73",
        pres:"1,016 \u767e\u5e15",
        sight:"5.0 \u516c\u91cc",
        uv:"0"
    }];

const styles = StyleSheet.create({
    withinDayHoursTimeBold: {
        color: '#fff',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '500'
    },
    widthDayHours: {
        color: '#fff',
        fontSize:12,
        textAlign:"center"
    },
    withinDayHoursTimeBold: {
        color: '#fff',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '500'
    },
    withDayHoursDegreeBold: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 5,
        fontWeight: '500'
    },
    withinDayHoursDegree: {
        color:"#fff",
        fontSize:14,
        paddingTop:5,
        textAlign:"center"
    },
    withinWeekLine:{
        flexDirection:"row",
        height: 28
    },
    withinWeekDay:{
        justifyContent:"center",
        alignItems:"flex-start",
        flex:1,
    },
    withinWeekDayText:{
        color:"#fff",
        paddingLeft:20,
        fontSize:15,
    },
    withinWeekIcon:{
        justifyContent:"center",
        alignItems:"center",
        flex:1, 
    },
    withinWeekIconIcon:{
        color:"#fff"
    },
    withinWeekDegree:{
        justifyContent:"flex-end",
        alignItems:"center",
        flex:1,
        flexDirection:"row",
        paddingRight:25,
    },
    withinWeekHigh:{
        color:"#fff",
        width:35,
        fontSize:16,
        textAlign:"right"
    },
    withinWeekLowNight:{
        color:"#aaa",
        width:35,
        fontSize:16,
        textAlign:"right"
    },
    withinWeekLow:{
        color:"#eee",
        width:35,
        fontSize:16,
        textAlign:"right"
    },
    backBtn:{
        position:"absolute", 
        right:20,
        bottom:7
    },
    backBtnIcon:{
        color:"#fff"
    },
    pageContainer:{
        backgroundColor:"transparent",
        position: "absolute",
        width: screen.width,
        left:0,
        top: 20,
        height: screen.height - 53
    },
    headInfo:{
        paddingTop:70,
        alignItems:"center",
        paddingBottom:60,
    },
    withinDayGeneral:{
        flexDirection:"row",
        width: screen.width,
    },
    withinDayHead:{
        flex:1,
        flexDirection:"row",
        justifyContent: 'flex-start',
        paddingLeft: 20,
    },
    withinDayTail:{
        flex:1,
        flexDirection:"row",
        justifyContent: 'flex-end',
        paddingRight: 10,
    },
    withinDayLowNight:{
        fontSize:16,
        color: "#aaa",
        fontWeight: "200",
        width:30,
    },
    withinDayLow:{
        fontSize:16,
        color: "#eee",
        fontWeight: "200",
        width:30,
    },
});

export default class extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            weather: weatherData,
        }
    }

    back() {
        this.props.navigation.pop();
    }
    
    render() {
        const slides = this.state.weather.map((element, index) => {
            const hourView = element.hours.map((hourElem, hourIndex) => {
                return (
                    <View key={hourElem.key} style={styles.withinDayHoursBox}>
                        <Text style={
                            hourIndex === 0 ? styles.withinDayHoursTimeBold : styles.widthDayHours
                        }>{hourElem.time}</Text>
                        <Icon name={hourElem.icon} size={25} style={[
                            styles.withinDayHoursTimeBold,
                            {color: hourElem.color}
                        ]} />
                        <Text style={
                            hourIndex === 0 ? styles.withDayHoursDegreeBold : styles.withinDayHoursDegree
                        }>{hourElem.degree}</Text>
                    </View>
                )
            });

            const dayView = element.days.map((dayElem, dayIndex) => {
                return (
                    <View key={dayElem.key} style={styles.withinWeekLine}>
                        <View style={styles.withinWeekDay}>
                            <Text style={styles.withinWeekDayText}>
                                {dayElem.day}
                            </Text>
                        </View>
                        <View style={styles.withinWeekIcon}>
                            <Icon name={dayElem.icon} style={styles.withinWeekIconIcon} size={25} />
                        </View>
                        <View style={styles.withinWeekDegree}>
                            <Text style={styles.withinWeekHigh}>
                                {dayElem.day}
                            </Text>
                            <Text style={
                                element.night ? styles.withinWeekLowNight : styles.withinWeekLow
                            }>
                                {dayElem.low}
                            </Text>
                        </View>
                    </View>
                );
            });

            return (
                <View key={element.key}>
                    <Image source={element.bg}></Image>
                    <ScrollView style={styles.pageContainer} showsVerticalScrollIndicator={false}>
                        <View style={styles.headInfo}>
                            <Text style={{
                                fontSize: 25,
                                color:"#fff",
                                paddingBottom: 5,
                                backgroundColor:"transparent"
                            }}>{element.city}</Text>
                            <Text style={{
                                fontSize:15,
                                color:"#fff",
                                backgroundColor:"transparent"
                            }}>{element.abs}</Text>
                            <Text style={{
                                fontSize:85,
                                color:"#fff",
                                fontWeight: "100",
                            }}>{element.degree}</Text>
                            <Text style={{
                               fontSize:35,
                               color:"#fff",
                               fontWeight: "300",
                               position:"absolute",
                               top:130,
                               right: screen.width / 2 - 55, 
                            }}>°</Text>
                        </View>
                        <View>
                            <View style={styles.withinDayGeneral}>
                                <View style={styles.withinDayHead}>
                                    <Text style={{
                                        fontSize:15,
                                        color: "#fff",
                                        fontWeight: "400",
                                        width:50,
                                    }}>{element.today.week}</Text>
                                    <Text style={{
                                        fontSize:15,
                                        color: "#fff",
                                        fontWeight: "300",
                                        width:50,
                                    }}>{element.today.day}</Text>
                                </View>
                                <View style={styles.withinDayTail}>
                                    <Text style={{
                                        fontSize:16,
                                        color: "#fff",
                                        fontWeight: "200",
                                        width:30,
                                    }}>{element.today.high}</Text>
                                    <Text style={
                                        element.night ? styles.withinDayLowNight : styles.withinDayLow
                                    }>{element.today.low}</Text>
                                </View>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                                    marginTop: 3,
                                    borderTopColor: "rgba(255,255,255,0.7)",
                                    borderTopWidth: screen.onePixel,
                                    borderBottomColor: "rgba(255,255,255,0.7)",
                                    borderBottomWidth: screen.onePixel
                                }}>
                                    { hourView }
                                </ScrollView>

                            </View>
                        </View>
                    </ScrollView>
                </View>
            )
        })

        console.log(slides.length)

        return (
            <Swiper
                showsButtons={false}
                paginationStyle={{
                    bottom:10, 
                    paddingTop:10, 
                    borderTopColor: "rgba(255,255,255,0.7)",
                    borderTopWidth: screen.onePixel}}
                dot={<View style={{
                    backgroundColor: 'rgba(255,255,255,0.2)', 
                    width: 6, 
                    height: 6, 
                    borderRadius: 3, 
                    marginLeft: 3, 
                    marginRight: 3, 
                    marginTop: 3, 
                    marginBottom: 3,}} />}
                activeDot={<View style={{
                    backgroundColor: 'rgba(255,255,255,0.5)', 
                    width: 6, 
                    height: 6, 
                    borderRadius: 3, 
                    marginLeft: 3, 
                    marginRight: 3, 
                    marginTop: 3, 
                    marginBottom: 3,}} />}>
                {slides}
            </Swiper>                
        )
    }
}