import { StatusBar, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Button from '../../components/ButtonGeral';
import PesoList from './Lists/Peso';
import RefeicaoList from './Lists/Refeicao';
import TendenciaList from './Lists/Tendencia';
import AtividadeList from './Lists/AtividadeFisica';

import style from './style';

export default function Metas({ navigation }) {
    function openLoadingPage(loadingPage) {
        navigation.navigate("LoadingPage", loadingPage);
    }
    return (
        <SafeAreaView>
            <View style={style.container}>
                <View style={{ alignItems: 'center' }}>
                    <View>
                        <View>
                            <Text style={style.title}>
                                Por último, vamos definir suas {'\n'}
                                metas
                            </Text>
                        </View>
                    </View>
                    <View>
                    </View>
                    <View>
                        <View>
                            <Text style={style.titles}>
                                Quero uma dieta para:
                            </Text>
                            <PesoList />
                        </View>
                        <View />
                        <View>
                            <Text style={style.titles}>
                                Diaramente faço:
                            </Text>
                            <RefeicaoList />
                        </View>
                        <View />
                        <View>
                            <Text style={style.titles}>
                                Tenho o costume de variar  {'\n'}
                                a minha alimentação:
                            </Text>
                            <TendenciaList />
                        </View>
                        <View />
                        <View>
                            <Text style={style.titles}>
                                Pratico atividade Fisísca:
                            </Text>
                            <AtividadeList />
                        </View>
                    </View>
                    <StatusBar style='auto' />
                </View>
                <Button
                    type={"primary"}
                    onPress={openLoadingPage}
                    text={"Avançar"} />
            </View>

        </SafeAreaView>
    );
}