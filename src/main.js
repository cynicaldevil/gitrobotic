import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import keycode from 'keycode';
import ActivityArea from './ActivityArea';
import {Tabs, Tab} from 'material-ui/Tabs';

import CommitTree from './CommitTreePanel';
import StagingArea from './StagingAreaPanel';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

import Git from 'nodegit';

const darkMuiTheme = getMuiTheme(darkBaseTheme);


  }
}

  constructor(props) {
    super(props);
  }

  }

    };

    return (
  }

class App extends React.Component {
  constructor(props) {
    super(props);
      repos: [],
    };
  }

  handleTabChange = (value) => {
    this.setState({
      tabValue: value
    });
  }

  handleKeyPressChange = (passedPath) => {
    }

    }
  }

  }

  }

    this.setState({
    });
  }

  componentWillMount = () => {
    injectTapEventPlugin();
  }

  //for dev prurposes only
  componentDidMount = () => {
    this.handleKeyPressChange('../git-gui');
  }

  render() {

    const styles = {
      mainPanel: {
        height:800
      },
      repos: {
      },
      tabs: {
    };


    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div style={styles.mainPanel} >


            <Tabs style={styles.tabs} value={this.state.tabValue}  onChange={this.handleTabChange} >

              <Tab label="Commits" value="CommitTree" >
                <CommitTree repo={renderRepo} />
              </Tab>

              <Tab label="Staging Area" value="StagingArea" >
                <StagingArea repo={renderRepo} />
              </Tab>

            </Tabs>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
