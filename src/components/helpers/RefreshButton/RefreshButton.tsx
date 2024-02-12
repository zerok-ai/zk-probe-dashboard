import { IconButton } from "@mui/material";
import TooltipX from "components/custom/ZkTooltip";
import { ICONS } from "utils/images";

import styles from "./ClusterRefreshButton.module.scss";
import { getImagePath } from "utils/functions";

interface ClusterRefreshButtonProps {
  onRefresh?: () => void;
}

const ClusterRefreshButton = ({ onRefresh }: ClusterRefreshButtonProps) => {
  return (
    <TooltipX title="Refresh data" arrow={false}>
      <IconButton
        className={styles.container}
        size="large"
        onClick={() => {
          // dispatch(triggerRefetch());
          onRefresh && onRefresh();
        }}
      >
        <img src={`${getImagePath("refresh", "icon")}`} alt="refresh" />
      </IconButton>
    </TooltipX>
  );
};

export default ClusterRefreshButton;
