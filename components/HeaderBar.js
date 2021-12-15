import React from 'react';
import {
    View,
    Text,
    Platform,
} from 'react-native';

import { COLORS, FONTS, SIZES } from "../constants";
import { isIphoneX } from 'react-native-iphone-x-helper';


const HeaderBar = ({ title }) => {
    return (
        <View
            style={{
                height: isIphoneX() ? 100 : 70,
                paddingHorizontal: SIZES.radius,
                justifyContent: 'flex-end'
            }}
        >
            <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>{title}</Text>
        </View>
    )
}

export default HeaderBar;