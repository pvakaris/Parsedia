import { Skeleton } from "@mantine/core";
import Blockies from "react-blockies";
import { useMoralis } from "react-moralis";

/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
 */

const Blockie = (props) => {
  const { account, isAuthenticated } = useMoralis();
  if (!props.address && (!account || !isAuthenticated))
    return <Skeleton height={50} circle mb="xl" />;

  return (
    <Blockies
      seed={
        props.currentWallet
          ? account.toLowerCase()
          : props.address.toLowerCase()
      }
      className="identicon"
      {...props}
    />
  );
};

export default Blockie;