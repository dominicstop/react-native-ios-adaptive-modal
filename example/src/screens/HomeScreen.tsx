import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  ViewStyle,
} from "react-native";

import type { ExampleItemProps } from "../examples/SharedExampleTypes";

import { AdaptiveModalViewTest01 } from "../examples/AdaptiveModalViewTest01";
import { AdaptiveModalViewTest02 } from "../examples/AdaptiveModalViewTest02";
import { AdaptiveModalViewTest03 } from "../examples/AdaptiveModalViewTest03";
import { AdaptiveModalViewTest04 } from "../examples/AdaptiveModalViewTest04";

import { DebugControls } from "../examples/DebugControls";
import { SHARED_ENV } from "../constants/SharedEnv";

type ExampleListItem = {
  id: number;
  component: React.FC<ExampleItemProps>;
};

const EXAMPLE_COMPONENTS = (() => {
  const items = [
    AdaptiveModalViewTest01, 
    AdaptiveModalViewTest02,
    AdaptiveModalViewTest03,
    AdaptiveModalViewTest04,
  ];

  if (SHARED_ENV.enableReactNavigation) {
    items.splice(0, 0, ...[DebugControls]);
  }

  return items;
})();

const EXAMPLE_ITEMS: ExampleListItem[] = EXAMPLE_COMPONENTS.map(
  (item, index) => ({
    id: index + 1,
    component: item,
  })
);

export function ExampleList(props: {
  style: ViewStyle;
  contentContainerStyle: ViewStyle;
}) {
  const renderItem: ListRenderItem<ExampleListItem> = ({ item }) =>
    React.createElement(item.component, {
      index: item.id,
      style: styles.exampleListItem,
    });

  return (
    <FlatList
      style={props.style}
      contentContainerStyle={props.contentContainerStyle}
      data={EXAMPLE_ITEMS}
      renderItem={renderItem}
      keyExtractor={(item) => `item-${item.id}`}
    />
  );
}

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ExampleList
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContentContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 100,
    paddingTop: 20,
  },
  exampleListItem: {
    marginBottom: 15,
  },
});
