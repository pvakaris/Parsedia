import { Stepper } from "@mantine/core";

// This is 4th step of the account creation process
// This step asks user to configure his reward settings
const StepFour = () => {
    return <Stepper.Step
        label="Fourth step"
        description="Configure reward settings"
    >
        Offer user to opt-in for advertising of a products that user can be
        intersested in and configure earning profile and select how many ads
        user wants to receive if at all
    </Stepper.Step>;
};

export default StepFour;