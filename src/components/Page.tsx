import React from "react";
import {Page, StyleSheet, Font, View, Text } from "@react-pdf/renderer";
import { IItemDetail } from "../interfaces/ItemRecord";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: "bold"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: "light"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-black-webfont.ttf",
      fontStyle: "black"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.woff",
      fontWeight: "medium"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
      fontWeight: "normal"
    }
  ]
});

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  name: {
    width: '100%',
    height: '30%',
    borderBottom: '1px black solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name_text: {
    textAlign: 'center',
    fontWeight: 'black',
    fontSize: '46px',
    letterSpacing: '-1px'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '70%'
  },
  info_title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '50%',
    height: '100%',
    textAlign: 'right',
  },
  info_detail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '50%',
    height: '100%',
    textAlign: 'left',
    paddingLeft: '10px'
  },
  text: {
    width: '100%',
    fontSize: '36px'
  }
})



function PageCustom({itemDetail, date}:{itemDetail: IItemDetail, date: string}){
  
  function getName(name : string) : string {
    if (name.length > 16) {
      let words = name.split(" ")
      let index = words.length/2
      words.splice(index, 0, '\n')
      name = words.join(" ")
    }
    return name.toLocaleUpperCase()
  }

  return (
    <Page 
      size="A5" 
      orientation="landscape"
      style={styles.page}
    >
      <View style={styles.content}>
        <View style={styles.name}>
          <Text style={styles.name_text}>{getName(itemDetail.name)}</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.info_title}>
            <Text style={styles.text}>Ngày về kho :</Text>
            <Text style={styles.text}>Xuất xứ :</Text>
            <Text style={styles.text}>Nhà cung cấp :</Text>
            <Text style={styles.text}>Quy cách : </Text>
            <Text style={styles.text}>Ngày thay nước : </Text>
          </View>
          <View style={styles.info_detail}>
            <Text style={styles.text}>{date != '' ? date : " "}</Text>
            <Text style={styles.text}>{itemDetail.origin}</Text>
            <Text style={styles.text}>{itemDetail.provider}</Text>
            <Text style={styles.text}>{itemDetail.packaging}</Text>
            <Text style={styles.text}>{" "}</Text>
          </View>
        </View>
      </View>
    </Page>
  )
}

export default PageCustom;