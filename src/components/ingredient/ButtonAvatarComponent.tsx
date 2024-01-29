import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import DefaultAvatar from '../common/DefaultAvatar';

interface Props {
    uid: number;
    avatar: string;
    isFollowing: boolean;
    size?: number;
    addButton?: boolean;
    name: string;
}
const ButtonAvatarComponent = (props: Props) => {
    const { avatar, uid, isFollowing, size, addButton, name } = props;
    const [isFollow, setIsFollow] = useState(isFollowing);

    const handleFollowEvent = () => {
        console.log("call api follow success");
        setIsFollow(!isFollow);
    }
    return (
        <ButtonComponent
            previousImage={
                <View>
                    {
                        avatar ? <Image
                            style={{ width: size ?? 45, height: size ?? 45, borderRadius: 100 }}
                            source={{ uri: avatar }} />
                            :
                            <DefaultAvatar size={45} name={name[0]}
                            />
                    }
                    {
                        addButton && <TouchableOpacity
                            style={{
                                position: 'absolute',
                                width: 25,
                                height: 25,
                                bottom: -5,
                                left: (45 - 25) / 2
                            }}
                            onPress={() => handleFollowEvent()}
                        >
                            <Image
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%'
                                }}
                                source={require("../../assets/images/plus-button.png")}
                            />
                        </TouchableOpacity>
                    }
                </View>
            }
            onPress={() => console.log("profile")}
        />
    )
}

export default ButtonAvatarComponent