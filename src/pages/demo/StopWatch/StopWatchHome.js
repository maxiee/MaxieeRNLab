import React, {Component} from 'react';
import { View, Text, TouchableHighlight, ListView } from 'react-native';
import screen from '../../../common/screen';

class WatchFace extends Component {
    render() {
        return (
            <View style={{
                width: screen.width,
                paddingTop: 30,
                paddingLeft: 30,
                paddingRight: 30,
                paddingBottom: 40,
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
                height: 170
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '100',
                    paddingRight: 30,
                    color: '#555',
                    position: 'absolute',
                    right: 0,
                    textAlign: 'right',
                    top: 30
                }}>{this.props.sectionTime}</Text>
                <Text style={{
                    fontSize: screen.width == 375 ? 70 : 60,
                    fontWeight: '100',
                    color: '#222',
                    paddingLeft: 20
                }}>{this.props.totalTime}</Text>
            </View>
        )
    }
}

class WatchControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watchOn: false,
            startBtnText: "启动",
            startBtnColor: "#60B644",
            stopBtnText: "计次",
            underlayColor:"#fff",
        }
    }

    startWatch() {
        console.log("startWatch max")
        if (!this.state.watchOn) {
            this.props.startWatch();
            this.setState({
                startBtnText: '停止',
                startBtnColor: '#ff0044',
                stopBtnText: '计次',
                underlayColor: '#eee',
                watchOn: true
            })
        } else {
            this.props.stopWatch();
            this.setState({
                startBtnText: '启动',
                startBtnColor: '#60B644',
                stopBtnText: '复位',
                underlayColor: '#eee',
                watchOn: false
            })
        }
    }

    addRecord() {
        if (this.state.watchOn) {
            this.props.addRecord()
        } else { 
            this.props.clearRecord()
            this.setState({
              stopBtnText: "计次"
            })
        }
    }

    render() {
        return (
            <View style={{
                width: screen.width,
                height: 100,
                flexDirection: 'row',
                backgroundColor: '#f3f3f3',
                paddingTop: 30,
                paddingLeft: 60,
                paddingRight: 60,
                paddingBottom: 0
            }}>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <TouchableHighlight style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => this.addRecord()}>
                        <Text style={{
                            fontSize: 14,
                            backgroundColor: 'transparent',
                            color: '#555'
                        }}>{this.state.stopBtnText}</Text>
                    </TouchableHighlight>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'flex-end'
                }}>
                    <TouchableHighlight style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} 
                    underlayColor="#eee"
                    onPress={() => this.startWatch()}>
                        <Text style={{
                            fontSize:14,
                            backgroundColor:"transparent",
                            color: this.state.startBtnColor
                        }}>{this.state.startBtnText}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

class WatchRecord extends Component {
    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        theDataSource = ds.cloneWithRows(this.props.record);
        return (
            <ListView
                style={{
                    width: screen.width,
                    height: screen.height - 300,
                    paddingLeft: 15
                }}
                dataSource={theDataSource}
                renderRow={(rowData) => 
                    <View style={{
                        height: 40,
                        borderBottomWidth: screen.onePixel,
                        borderBottomColor: '#bbb',
                        paddingTop: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingBottom: 5,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            backgroundColor: 'transparent',
                            flex: 1,
                            textAlign: 'left',
                            paddingLeft: 20,
                            color: '#777'
                        }}>{rowData.title}</Text>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{
                                backgroundColor: 'transparent',
                                flex: 1,
                                textAlign: 'right',
                                paddingRight: 20,
                                color: '#222'
                            }}>{rowData.time}</Text>
                        </View>
                    </View>
                }/>
        )
    }
}

export default class StopWatchHome extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            stopWatch: false,
            resetWatch: true,
            initialTime: 0,
            currentTime: 0,
            recorderTime: 0,
            timeAccumulation: 0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            record:[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""}
            ],
        }
    }

    componentWillUnmount() {
        this.stopWatch();
        this.clearRecord();
    }

    startWatch() {
        if (this.state.resetWatch) {
            this.setState({
                stopWatch: false,
                resetWatch: false,
                timeAccumulation: 0,
                initialTime: (new Date()).getTime()
            })
        } else {
            this.setState({
                stopWatch: false,
                initialTime: (new Date()).getTime()
            })
        }

        let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
        let interval = setInterval(
            () => { 
                this.setState({
                    currentTime: (new Date()).getTime()
                })
                countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
                minute = Math.floor(countingTime/(60*1000));
                second = Math.floor((countingTime-6000*minute)/1000);
                milSecond = Math.floor((countingTime%1000)/10);
                seccountingTime = countingTime - this.state.recordTime;
                secminute = Math.floor(seccountingTime/(60*1000));
                secsecond = Math.floor((seccountingTime-6000*secminute)/1000);
                secmilSecond = Math.floor((seccountingTime%1000)/10);
                this.setState({
                    totalTime: (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond),
                    sectionTime: (secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+(secmilSecond<10? "0"+secmilSecond:secmilSecond),
                })
                if (this.state.stopWatch) {
                    this.setState({
                        timeAccumulation: countingTime 
                    })
                    clearInterval(interval)
                };
        }, 50);
    }

    stopWatch() {
        this.setState({
            stopWatch: true
        })
    }

    addRecord() {
        let {recordCounter, record} = this.state;
        recordCounter++;
        if (recordCounter<8) {
            record.pop();
        }
        record.unshift({
            title: "计次" + recordCounter,
            time: this.state.sectionTime
        });
        this.setState({
            recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
            recordCounter: recordCounter,
            record: record
        })
    }

    clearRecord() {
        this.setState({
            stopWatch: false,
            resetWatch: true,
            intialTime: 0,
            currentTime:0,
            recordTime:0,
            timeAccumulation:0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            record:[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""}
            ],
        });
    }

    render() {
        return (
            <View style={{
                alignItems: 'center',
                backgroundColor: '#f3f3f3',
                marginTop: 60
            }}>
                <WatchFace 
                    totalTime={this.state.totalTime}
                    sectionTime={this.state.sectionTime} />
                <WatchControl
                    addRecord={() => this.addRecord()}
                    clearRecord={() => this.clearRecord()}
                    startWatch={() => this.startWatch()}
                    stopWatch={() => this.stopWatch()} />
                <WatchRecord record={this.state.record}></WatchRecord>
            </View>
        )
    }
}