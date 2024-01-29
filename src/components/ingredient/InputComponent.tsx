import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import { closeReplyComments } from '../../redux/Slice';

interface Props {
    onPress: (val: any[]) => void;
    placeholder: string;
    iconRight?: ReactNode;
}

const InputComponent = (props: Props) => {
    console.log('================InputComponent====================');
    const dispatch = useAppDispatch();
    const { openReplyComment, openModalComment } = useAppSelector((state) => state.TikTok2024Reducer);
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        openReplyComment.uid && inputRef?.current?.focus();
    }, [openReplyComment.uniqueCode]);

    Keyboard.addListener('keyboardDidHide', () => {
        inputRef?.current?.blur();
    });

    const { onPress, placeholder, iconRight } = props;
    const [comments, setComments] = useState('');

    const handleSubmitEvent = useCallback(() => {
        console.log('====================================');
        console.log("Submit");
        console.log('====================================');
        onPress([{ comments }, { openReplyComment }])
        dispatch(closeReplyComments());
        setComments('');
        Keyboard.dismiss();
    }, [comments])

    return (
        <>
            <TextInput
                ref={inputRef}
                value={comments}
                onChangeText={(val) => setComments(val)}
                placeholder={placeholder}
                style={styles.input}
            />
            <TouchableOpacity
                style={{
                    width: '13%'
                }}
                onPress={handleSubmitEvent}
            >
                {
                    iconRight
                }
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 45, width: '87%', paddingLeft: 15
    }
})
export default InputComponent