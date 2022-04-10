import React, { useState, VFC } from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../core/button/CustomButton";
import CustomContainer from "../../core/container/CustomContainer";
import CustomBox from "../../core/form/CustomBox";
import CustomTextInput from "../../core/textinput/CustomTextInput";
import Logo from "@assets/svg/logo.svg";
import theme from "../../theme/theme";
import IssueItem from "../../core/issueitem/IssueItem";
import { fetchIssuesByOwnerAndRepo } from "../../http/get";
import Pagination from "./pagination/Pagination";
import CustomDropdown from "../../core/dropdown/CustomDropdown";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DETAILS_SCREEN, HOME_SCREEN } from "../../utils/constants";
import { RootStackParamList } from "../../router/Router";
import { Issue } from "../../types";

const Home: VFC<
  NativeStackScreenProps<RootStackParamList, typeof HOME_SCREEN>
> = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [activeNumber, setActiveNumber] = useState(0);

  const handleSearch = async (owner: string, repo: string) => {
    try {
      const currentIssues = await fetchIssuesByOwnerAndRepo(owner, repo, 1);
      setIssues(currentIssues);
      const innerPages = Math.ceil(issues.length / 10);
      const nums = Array.from(
        { length: innerPages },
        (_, i) => i + 1 + innerPages * (currentPage - 1)
      );
      setPages(nums);
      setCurrentPage((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrev = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomContainer style={{ paddingTop: "10%" }}>
        <Logo style={styles.logo} />
        <Text style={styles.title}>Github Issue Tracker</Text>
        <CustomBox>
          <CustomTextInput
            label="Owner"
            textInputProps={{
              accessibilityLabel: "Owner of the repository",
            }}
            style={{ marginBottom: 16 }}
          />
          <CustomTextInput
            label="Repository name"
            textInputProps={{ accessibilityLabel: "Name of the repository" }}
            style={{ marginBottom: 16 }}
          />
          <CustomDropdown
            data={["one", "two"]}
            onSelect={(selectedItem) => console.log(selectedItem)}
            buttonTextAfterSelection={(selectedItem) => selectedItem}
            rowTextForSelection={(item) => item}
          />
          <CustomButton title="Search" />
        </CustomBox>
        <IssueItem
          title="Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti dolorem est eius cum tempora id "
          number={5}
          body="asd"
          createdAt={new Date()}
          closedAt={null}
          user={{ login: "vanko", avatar_url: "" }}
          onPress={() =>
            navigation.navigate(DETAILS_SCREEN, {
              owner: "asd",
              repo: "aaa",
              number: 1,
            })
          }
        />
        <Pagination
          numbers={[1, 2, 3, 4, 5]}
          activeNumber={activeNumber}
          onPrev={handlePrev}
          onNext={() => {}}
          onChangeActiveNumber={setActiveNumber}
        />
      </CustomContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    marginBottom: 24,
  },
  title: {
    ...theme.typography.verylargeText,
    color: theme.palette.veryDarkGrey,
    alignSelf: "center",
    marginBottom: 16,
  },
});

export default Home;
