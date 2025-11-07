import React, { Component } from "react";
import { connect } from "react-redux";
import { withTheme, withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import {
  FormattedMessage,
  Contributions,
  AmountInput,
  ProgressOrError,
} from "@openimis/fe-core";

const styles = (theme) => ({
  paper: theme.paper.paper,
  tableTitle: theme.table.title,
  item: theme.paper.item,
  itemcenter: {
    ...theme.paper.item,
    textAlign: "center",
  },
});

const POLICY_POLICY_VALUES_CONTRIBUTION_KEY = "policy.PolicyValues";
const POLICY_POLICY_VALUES_PANELS_CONTRIBUTION_KEY =
  "policy.PolicyValues.panels";

class PolicyValuesPanel extends Component {
  render() {
    const {
      classes,
      title = "Policy.values.title",
      contributionPanelReadOnly = true,
      edited,
      fetchingPolicyValues,
      errorPolicyValues,
    } = this.props;

    let readOnly = contributionPanelReadOnly;
    return (
      <></>   );
  }
}
const mapStateToProps = (state) => ({
  fetchingPolicyValues: state.policy.fetchingPolicyValues,
  fetchedPolicyValues: state.policy.fetchedPolicyValues,
  errorPolicyValues: state.policy.errorPolicyValues,
  policyValues: state.policy.policyValues,
});

export default withTheme(
  withStyles(styles)(connect(mapStateToProps)(PolicyValuesPanel))
);
