import React, { Component } from "react";

class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "", // radio button value
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
      index: 0,
    };
  }

  onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };

  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };

  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;

    return (
      <div>
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part 1</h1>

          <input
            type="text"
            value={t1}
            placeholder="First Name"
            onChange={(e) => this.setState({ t1: e.target.value })}
          />
          <br />

          <input
            type="text"
            value={t2}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t2: e.target.value })}
          />
          <br />

          <input
            type="text"
            value={t3}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t3: e.target.value })} 
          />
          <br />
        </div>

        <div style={{ display: index === 1 ? "" : "none" }}>
          <div style={{ display: index === 1 ? "" : "none" }}>
            <h1>Part 2</h1>

            <label>
              <input
                type ="radio"
                name="gender"
                value="Male"
                checked={t4 === "Male"}
                onChange={(e) => this.setState({ t4: e.target.value })}
              />
              Male
            </label>

            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={t4 === "Female"}
                onChange={(e) => this.setState({ t4: e.target.value })}
              />
              Female
            </label>

            <br />

            <select
              value={t5}
              onChange={(e) => this.setState({ t5: e.target.value })}
            >
              <option value="">Select City</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Vadodara">Vadodara</option>
            </select>

            <br />

            <input
              type="text"
              list="branchList"
              placeholder="Branch"
              value={t6}
              onChange={(e) => this.setState({ t6: e.target.value })}
            />

            <datalist id="branchList">
              <option value="CE" />
              <option value="IT" />
            </datalist>
          </div>

          <h1>Part 3</h1>

          <input
            type="text"
            value={t7}
            placeholder="First Name"
            onChange={(e) => this.setState({ t7: e.target.value })}
          />
          <label>
            Choose Color:
            <input
              type="color"
              value={t7}
              onChange={(e) => this.setState({ t7: e.target.value })}
              style={{ marginLeft: "10px" }}
            />
          </label>

          <br />

          <input
            type="text"
            value={t8}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t8: e.target.value })}
          />
          <label>
            Select Date:
            <input
              type="date"
              value={t8}
              onChange={(e) => this.setState({ t8: e.target.value })}
              style={{ marginLeft: "10px" }}
            />
          </label>

          <br />

          <input
            type="text"
            value={t9}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t9: e.target.value })}
          />
          <br />
        </div>

        <div>
          <button disabled={index === 2} onClick={this.onclicknext}>
            Next
          </button>

          <button disabled={index === 0} onClick={this.onclickprevious}>
            Previous
          </button>
        </div>

        <hr />

        <div>
          <div>{t1}</div>
          <div>{t2}</div>
          <div>{t3}</div>
        </div>

        <div>
          <div>{t4}</div>
          <div>{t5}</div>
          <div>{t6}</div>
        </div>

        <div>
          <div>{t7}</div>
          <div>{t8}</div>
          <div>{t9}</div>
        </div>
      </div>
    );
  }
}

export default MultiPart;
