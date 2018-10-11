import React from 'react';

let globalId = 0;
class HubSpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };

    this.id = `hubspot-form-${globalId++}`;
  }

  componentDidMount() {
    if (window.hbspt) {
      this.createForm();
    } else {
      this.loadScript();
    }
  }

  createForm = () => {
    const { portalId, formId } = this.props;

    if (!window.hbspt || !portalId || !formId) return;

    window.hbspt.forms.create({
      target: `#${this.id}`,
      portalId,
      formId,
    });

    this.setState({ isLoaded: true });
  };

  loadScript = () => {
    const script = document.createElement(`script`);
    script.defer = true;
    script.onload = () => {
      this.createForm();
    };
    script.src = `//js.hsforms.net/forms/v2.js`;

    document.head.appendChild(script);
  };

  render() {
    const { isLoaded } = this.state;

    return <div id={this.id} style={{ display: isLoaded ? 'block' : 'none' }} />;
  }
}

export default HubSpotForm;
