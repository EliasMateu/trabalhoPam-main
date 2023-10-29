import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import * as Progress from 'react-native-progress';//https://github.com/oblador/react-native-progress
import style from './style';
import Button from '../../components/ButtonGeral';

export default function LoadingPage({ route, navigation }) {
    function openHome(Home) {
        navigation.navigate("Home", Home);
    }
    return (
        <View style={style.container}>
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={style.txtLoading}>
                        Estamos gerando seu
                    </Text>
                    <Text style={style.txtLoading}>
                        cronograma, aguarde
                    </Text>
                    <Text style={style.txtLoading}>
                        um instante...
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Progress.Bar
                        useNativeDriver={false}
                        animationType='spring'
                        animationConfig={{ bounciness: 0 }}
                        color={'#218B21'}
                        progress={0.3}
                        width={331}
                        height={6}
                    />
                </View>
                <View style={style.next}>
                    <Text style={style.txtLoading}>
                        Cronograma gerado com
                    </Text>
                    <Text style={style.txtLoading}>
                        Sucesso!
                    </Text>
                    <Button
                        type={"primary"}
                        onPress={openHome}
                        text={"Avançar"} />
                </View>
            </View>
            <StatusBar style='auto' />
        </View>
    )
}