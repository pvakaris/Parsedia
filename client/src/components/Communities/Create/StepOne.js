import { Box, SimpleGrid, Text } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { SET_MEMBERSHIP_TYPE } from "redux/Community/createCommunitySlice";

export const StepOne = () => {
  // Get state and dispatch functions
  const state = useSelector((state) => state.createCommunity);
  const dispatch = useDispatch();

  // Set selected to the current state
  // Available options
  const options = [
    { id: 1, title: "Subscribtion based" },
    { id: 2, title: "One time fee" },
    { id: 3, title: "Free for everyone" },
  ];

  return (
    <>
      <Text align="center" sx={{ fontSize: "40px", fontWeight: "bold" }}>
        Select subscribtion type
      </Text>
      <SimpleGrid cols={3} spacing="xl">
        {/* Map out options */}
        {options.map((option) => (
          <Box
            onClick={() => {
              // When option selected dispatch action to select an option
              dispatch(SET_MEMBERSHIP_TYPE(option.id));
            }}
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? option.id === state.membershipType
                    ? theme.colors.dark[6]
                    : theme.colors.dark[8]
                  : option.id === state.membershipType
                  ? theme.colors.gray[2]
                  : theme.colors.gray[0],
              textAlign: "center",
              padding: theme.spacing.xl,
              borderRadius: theme.radius.md,
              cursor: "pointer",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              border: "1px solid gray",
              height: "200px",
              "&:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[1],
              },
            })}
          >
            <Text sx={{ fontSize: "30px", fontWeight: "bold" }}>
              {option.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};