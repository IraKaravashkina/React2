import React, {Component} from "react";


export default class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPhone: props.Phone,
        }
    }

    componentDidMount() {
        setInterval(() => this.PhonePlus(), 1000);
    }

    PhonePlus() {
        const {newPhone} = this.state;
        const {Plus} = this.props;
        this.setState({
                newPhone: newPhone + Plus,
            }
        )
    }

    render() {
        const {newPhone} = this.state;
        return (
            <h2> className={newPhone}</h2>

        );
    }
}
