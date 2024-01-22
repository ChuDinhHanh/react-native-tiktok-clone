import React from 'react';
import { Image, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';

interface Props {
    name: string,
    image?: string
}

const DefaultAvatar = (props: Props) => {
    const { name, image } = props;

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };


    return (

        <>

            {
                image ?
                    <Image
                        source={{ uri: image }}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 100,
                            flex: 0
                        }
                        }
                    />
                    :
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: generateColor(),
                            borderRadius: 100,
                            flex: 0,
                            justifyContent: 'center',
                            alignItems: "center",
                            borderWidth: 3,
                            borderColor: Colors.WHITE
                        }
                        }
                    >
                        <Text
                            style={{
                                color: "#fff",
                                textTransform: "uppercase"
                            }}
                        >{name}</Text>
                    </View >
            }
        </>
    )
}

export default DefaultAvatar