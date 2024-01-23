import { Fragment, useRef, useState } from "react";
import { AdaptiveModalConfigPresetsWithMetadata } from "../constants/AdaptiveModalConfigPresets";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AdaptiveModalView } from "react-native-ios-adaptive-modal";
import * as radix from "@radix-ui/colors";
import { Ionicons } from "@expo/vector-icons";

const colors = radix.mauveDark;

const themes = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "iris",
  "purple",
  "pink",
] satisfies Array<keyof typeof radix>;

const themesImplemented = themes.map((theme) => {
  const themeColors = radix[`${theme}Dark`];

  const finalColors = {} as {
    [key in `color${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`]: string;
  };

  Object.values(themeColors).forEach((value, i) => {
    // @ts-ignore
    finalColors[`color${i + 1}`] = value;
  });

  return finalColors;
});

export function ExampleScreen() {
  const [index, setIndex] = useState(0);
  const modalRef = useRef<AdaptiveModalView>(null);

  const preset =
    AdaptiveModalConfigPresetsWithMetadata[
      index % AdaptiveModalConfigPresetsWithMetadata.length
    ];

  const element = preset.component && <preset.component />;

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={{ gap: 4, paddingTop: 8, paddingBottom: 100 }}>
        {AdaptiveModalConfigPresetsWithMetadata.map((preset, i) => {
          const theme = themesImplemented[i % themesImplemented.length];
          return (
            <Pressable
              key={i}
              style={{
                borderStyle: "solid",
                padding: 8,
                marginHorizontal: 4,
                backgroundColor: theme.color1,
                borderRadius: 8,
                borderColor: theme.color7,
                flexDirection: "row",
                gap: 16,
                alignItems: "center",
              }}
              onPress={() => {
                setIndex(i);
                modalRef.current?.presentModal();
              }}
            >
              <View
                style={{
                  borderRadius: 6,
                  height: 30,
                  width: 30,
                  backgroundColor: theme.color3,
                }}
              >
                <Text
                  style={{
                    fontWeight: "600",
                    textAlign: "center",
                    color: theme.color11,
                    lineHeight: 30,
                  }}
                >
                  #{i + 1}
                </Text>
              </View>
              <View style={{ flex: 1, gap: 4 }}>
                <Text style={{ fontWeight: "700", color: "white" }}>
                  {preset.title}
                </Text>
                <Text style={{ color: theme.color10, fontWeight: "500" }}>
                  {preset.description}
                </Text>
              </View>
              <Ionicons
                name='chevron-forward'
                color={theme.color10}
                size={18}
              />
            </Pressable>
          );
        })}
      </View>
      <AdaptiveModalView
        ref={modalRef}
        modalConfig={preset.modalConfig}
        modalContentAnchorMode={"stretch"}
        modalAnimationMode={"viewPropertyAnimatorContinuous"}
        shouldEnableContinuousLayoutResizingDuringAnimation={true}
      >
        {element || (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              paddingVertical: 40,
              gap: 8,
              paddingHorizontal: 16,
              // justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/beatgig-256.png")}
              style={{
                height: 45,
                width: 115,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontWeight: "700",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {preset.title}
            </Text>

            {preset.shouldShowTextBox ? (
              <TextInput
                style={{
                  backgroundColor: radix.mauve.mauve5,
                  padding: 6,
                  borderRadius: 8,
                  width: "100%",
                }}
                placeholder={preset.description}
              />
            ) : (
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500",
                }}
              >
                {preset.description}
              </Text>
            )}
          </View>
        )}
      </AdaptiveModalView>
    </ScrollView>
  );
}
