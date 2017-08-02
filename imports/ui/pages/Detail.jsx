import React from 'react';

export default class Detail extends React.Component {

    render() {
        const { service } = this.props;
        return (
            <div>
                <h1>Detail!</h1>
                <Page choices={service.home.choices} message={service.home.message} />
            </div>
        );
    }
}


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openChoices: {},
    };
  }
  render() {
    const choices = this.props.choices;
    const message = this.props.message;

    return (
      <div>
        { message }
        { choices
        ? Object.keys(choices).map(num => (
            <div>
              <span onClick={e => {
                const prevChoices = this.state.openChoices;
                prevChoices[num] = !prevChoices[num];
                this.setState({openChoices: prevChoices});

              }}>{num}: {choices[num].description}</span>
              { this.state.openChoices[num] &&
                <Page
                  choices={choices[num].choices}
                  message={choices[num].message}
                />
              }
            </div>
          ))
        : null
        }
      </div>
    )
  }
}