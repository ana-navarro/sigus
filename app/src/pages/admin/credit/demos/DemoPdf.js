import React from 'react'
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        color: "black"
    },
    block: {
        border: "4px solid #5F9DF7",
        margin: 10,
        padding: 20,
        display: "flex",
        width: "auto",
        borderStyle: "solid",
        borderRadius: 20,
    },
    header: {
        flexDirection: "row"
    },
    headerColumn: {
        flexDirection: "column",
        textAlign: 'center',
        alignContent: 'center'
    },
    headerName: {
        fontSize: 10,
        top: 20,
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 10,
        top: 20,
    },
    logo: {
        width: '30%',
        height: 'auto',
    },
    blockContent: {
        border: "4px solid #5F9DF7",
        padding: 10,
        borderRadius: 20,
        width: '100%',
        flexDirection: "column",
    },
    blockCompany: {
        border: "2px solid #5F9DF7",
        borderRadius: 25,
        fontSize: 12,
        padding: 30,
    },
    blockCreditRow: {
        flexDirection: "row",
    },
    blockCreditColumn: {
        flexDirection: "column",
        padding: 15,
        width: "50%",
    },
    blockCreditSquare: {
        border: "4px solid #5F9DF7",
        borderRadius: 12,
        fontSize: 18,
        paddingLeft: 20,
        padding: 20,
        textAlign: 'center',
    },
    blockLabel: {
        fontSize: 14,
        textAlign: 'center',
    },

    blockCreditRow1: {
        flexDirection: "row",
        textAlign: 'center',
    },
    blockCreditColumn1: {
        flexDirection: "column",
        width: "100%",
        padding: 15,
        textAlign: 'center',
    },
    blockCreditSquare1: {
        border: "4px solid #5F9DF7",
        borderRadius: 12,
        fontSize: 16,
        padding: 20,
        textAlign: 'center',
    },
    blockLabel1: {
        fontSize: 12,
        textAlign: 'center',
    },

    blockCreditRow2: {
        flexDirection: "row",
    },
    blockCreditColumn2: {
        flexDirection: "column",
        padding: 15,
        width: "50%",
    },
    blockCreditSquare2: {
        border: "4px solid #5F9DF7",
        borderRadius: 12,
        fontSize: 14,
        padding: 10,
        textAlign: 'center',
    },
    blockLabel2: {
        fontSize: 10,
        textAlign: 'center',
    },

    blockCreditRow3: {
        flexDirection: "row",
    },
    blockCreditColumn3: {
        flexDirection: "column",
        padding: 15,
        width: "35%",
    },
    blockCreditSquare3: {
        border: "4px solid #5F9DF7",
        borderRadius: 12,
        fontSize: 14,
        padding: 10,
        textAlign: 'center',
    },
    blockLabel3: {
        fontSize: 10,
        textAlign: 'center',
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});


export const DemoPdf = ({ company, credit, address, installationNumber }) => {

    return (
        <>
            <PDFViewer style={styles.viewer}>
                <Document file="demo.pdf">
                    <Page size="A4" pageNumber={1} style={styles.page}>
                        <View style={styles.block}>
                            <View style={styles.header}>
                                <Image style={styles.logo} src={'https://api.renovigi.com.br/upload/images/VaUzQfsOCSPkgrl7EdWVHVxMoYFY5dMPGBk3wzQ592rM6hhQbfOdYFHpTPHquio36BuxfzOgfKjdzGDF2gj4am'} />
                                <View style={styles.headerColumn}>
                                    <Text style={styles.headerName}>MINERA ENGENHARIA LTDA</Text>
                                    <Text style={styles.headerText}>Av. Gov. Magalhães Pinto, 2207 A - Alcides Rabelo</Text>
                                    <Text style={styles.headerText}>Montes Claros - MG</Text>
                                    <Text style={styles.headerText}>CEP: 39401-427</Text>
                                    <Text style={styles.headerText}>CNPJ: 20.195.562/0001</Text>
                                </View>
                                <Image style={styles.logo} src={'https://api.renovigi.com.br/upload/images/VaUzQfsOCSPkgrl7EdWVHVxMoYFY5dMPGBk3wzQ592rM6hhQbfOdYFHpTPHquio36BuxfzOgfKjdzGDF2gj4am'} />
                            </View>
                            <View style={styles.blockContent}>
                                <View style={styles.blockCompany}>
                                    <Text>{company.name}</Text>
                                    <Text>{address.street}, {address.number} - {address.block}</Text>
                                    <Text>{address.moreInfo}</Text>
                                    <Text>{address.city} - {address.state} - {address.country}</Text>
                                    <Text>{address.postalCode}</Text>
                                    <Text>{company.cnpj}</Text>
                                </View>
                                <View style={styles.blockCreditRow}>
                                    <View style={styles.blockCreditColumn}>
                                        <Text style={styles.blockLabel}>Mês de Referência</Text>
                                        <View style={styles.blockCreditSquare}>
                                            <Text>{credit.month}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.blockCreditColumn}>
                                        <Text style={styles.blockLabel}>Número de Instalação</Text>
                                        <View style={styles.blockCreditSquare}>
                                            <Text>{installationNumber}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.blockCreditRow3}>
                                    <View style={styles.blockCreditColumn3}>
                                        <Text style={styles.blockLabel3}>Balanço Anterior</Text>
                                        <View style={styles.blockCreditSquare3}>
                                            <Text>{credit.previousBalance} kWh</Text>
                                        </View>
                                    </View>
                                    <View style={styles.blockCreditColumn3}>
                                        <Text style={styles.blockLabel3}>Balanço Atual</Text>
                                        <View style={styles.blockCreditSquare3}>
                                            <Text>{credit.actualBalance} kWh</Text>
                                        </View>
                                    </View>
                                    <View style={styles.blockCreditColumn3}>
                                        <Text style={styles.blockLabel3}>Injetada</Text>
                                        <View style={styles.blockCreditSquare3}>
                                            <Text>{credit.injected} kWh</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.blockCreditRow3}>
                                    <View style={styles.blockCreditColumn3}>
                                        <Text style={styles.blockLabel3}>Total Injetada</Text>
                                        <View style={styles.blockCreditSquare3}>
                                            <Text>{credit.totalInjected} kWh</Text>
                                        </View>
                                    </View>
                                    <View style={styles.blockCreditColumn3}>
                                        <Text style={styles.blockLabel3}>Valor Energia</Text>
                                        <View style={styles.blockCreditSquare3}>
                                            <Text>R$ {credit.valueEnergy}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.blockCreditColumn3}>
                                        <Text style={styles.blockLabel3}>Desconto</Text>
                                        <View style={styles.blockCreditSquare3}>
                                            <Text>{credit.discount}%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.blockCreditRow2}>
                                    <View style={styles.blockCreditColumn2}>
                                        <Text style={styles.blockLabel2}>Valor do Desconto</Text>
                                        <View style={styles.blockCreditSquare2}>
                                            <Text>{credit.valueDiscount}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.blockCreditColumn2}>
                                        <Text style={styles.blockLabel2}>Data de Vencimento</Text>
                                        <View style={styles.blockCreditSquare2}>
                                            <Text>{credit.expirationDate}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.blockCreditRow1}>
                                    <View style={styles.blockCreditColumn1}>
                                        <Text style={styles.blockLabel1}>Valor do Pagamento</Text>
                                        <View style={styles.blockCreditSquare1}>
                                            <Text>R$ {credit.valuePayment}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </>
    )
}