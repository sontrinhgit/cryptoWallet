import React from "react";
import {
    Platform,
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { connect } from "react-redux";
import { setTradeModalVisibility } from "../stores/tab/tabActions";

import { Home, Portfolio, Market, Profile } from "../screens"
import { TabIcon } from "../components";
import { COLORS, icons, SIZES } from "../constants"
import { isIphoneX } from 'react-native-iphone-x-helper'


const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ children, onPress }) => {
    
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

const Tabs = ({ setTradeModalVisibility, isTradeModalVisible }) => {
    function tradeTabButtonOnClickHandler() {
        setTradeModalVisibility(!isTradeModalVisible)
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: isIphoneX() ? 140 : 80,
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.home}
                                    label="Home"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isTradeModalVisible) {
                            e.preventDefault()
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.briefcase}
                                    label="Portfolio"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isTradeModalVisible) {
                            e.preventDefault()
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Trade"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon
                                focused={focused}
                                icon={isTradeModalVisible ? icons.close : icons.trade}
                                iconStyle={isTradeModalVisible ? {
                                    width: 15,
                                    height: 15,
                                } : null}
                                label="Trade"
                                isTrade={true}
                            />
                        )
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            onPress={() => tradeTabButtonOnClickHandler()}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                   
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.market}
                                    label="Market"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isTradeModalVisible) {
                            e.preventDefault()
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.profile}
                                    label="Profile"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isTradeModalVisible) {
                            e.preventDefault()
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}

function mapStateToProps(state) {
    return {
        isTradeModalVisible: state.tabReducer.isTradeModalVisible
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTradeModalVisibility: (isVisible) => { return dispatch(setTradeModalVisibility(isVisible)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);