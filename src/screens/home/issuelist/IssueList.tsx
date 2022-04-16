import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, VFC } from "react";
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  ViewStyle,
} from "react-native";
import IssueItem from "../../../core/issueitem/IssueItem";
import { RootStackParamList } from "../../../router/Router";
import { IssueIntercept } from "../../../types";
import { DETAILS_SCREEN } from "../../../utils/constants";

interface Props extends Omit<FlatListProps<IssueIntercept>, "renderItem"> {
  style?: ViewStyle;
}

const IssueList: VFC<Props> = ({ style, ...props }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderItem: ListRenderItem<IssueIntercept> = useCallback(
    ({ item }) => (
      <IssueItem
        title={item.title}
        number={item.number}
        createdAt={new Date(item.created_at)}
        closedAt={item.closed_at && new Date(item.closed_at)}
        user={item.user.login}
        onPress={() =>
          navigation.navigate(DETAILS_SCREEN, {
            owner: item.owner,
            repo: item.repo,
            number: item.number,
          })
        }
        style={style}
      />
    ),
    []
  );

  return (
    <FlatList
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      {...props}
    />
  );
};

export default IssueList;
