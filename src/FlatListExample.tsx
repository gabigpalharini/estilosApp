import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, YellowBox } from "react-native";

interface Item {
    id: string;
    nome: string;
    idade: string;
    email: string;
}

const dados: Item[] = [
    { id: "1", nome: "Pedro", idade: "20", email: "pedro@teste.com" },
    { id: "2", nome: "Claudia", idade: "56", email: "claudia@teste.com" },
    { id: "3", nome: "João", idade: "40", email: "joão@teste.com" },
    { id: "4", nome: "José", idade: "20", email: "jose@teste.com" },
    { id: "5", nome: "paulo", idade: "20", email: "paulo@teste.com" },
    { id: "6", nome: "marcos", idade: "20", email: "pedro@teste.com" },
    { id: "7", nome: "caua", idade: "20", email: "pedro@teste.com" },
    { id: "8", nome: "mariana", idade: "20", email: "pedro@teste.com" },
    { id: "9", nome: "valentina", idade: "20", email: "pedro@teste.com" },
    { id: "10", nome: "Pedro", idade: "20", email: "pedro@teste.com" },
    { id: "11", nome: "Pedro", idade: "20", email: "pedro@teste.com" },
    { id: "11", nome: "Pedro", idade: "20", email: "pedro@teste.com" },
   
];

const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.idade}</Text>
        <Text>{item.email}</Text>

    </TouchableOpacity>
)

function FlatListExample(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="orange" barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.headerText}> Flat List</Text>

                </View>
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={dados}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

        <View style={styles.footer}>
            <TouchableOpacity>
                <Image 
                source={require('./imagem/home.png')}
                style={styles.footerIcon} 
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('./imagem/orders.png')} style={styles.footerIcon}  />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('./imagem/profile.png')} style={styles.footerIcon}  /> 
            </TouchableOpacity>

        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    header: {
        backgroundColor: 'orange',
        alignItems: 'center',
        paddingVertical: 50

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    }
    
});



export default FlatListExample