import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native';


export default () => {
    return (
        <LineChart
            data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                }]
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
                backgroundGradientFrom: 'red',
                backgroundGradientTo: 'blue',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
      />
    )
}