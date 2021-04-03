import React, { Component } from "react";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };
  render() {
    return (
      <div>
        <input
          style={{
            margin: "15px",
            padding: "10px",
            width: "25%",
          }}
          type="text"
          placeholder="Enter PlayerName to be searched"
          onChange={(e) => this.searchSpace(e)}
        />
        <div className="container-fluid">
          <div className="row" style={{ display: "flex", margin: "10px" }}>
            {this.props.details &&
              this.props.details.playerList
                .sort((c1, c2) => c1.Value - c2.Value)
                .filter((data) => {
                  if (this.state.search == null) return data;
                  else if (
                    data.PFName.toLowerCase().includes(
                      this.state.search.toLowerCase()
                    )
                  ) {
                    return data;
                  } else if (
                    data.TName.toLowerCase().includes(
                      this.state.search.toLowerCase()
                    )
                  ) {
                    return data;
                  }
                })
                .map((item) => {
                  return (
                    <div key={item.Id}>
                      {console.log(item)}
                      <div className="col-md-4">
                        <div
                          className="card"
                          style={{ width: "18rem", marginBottom: "15px" }}
                        >
                          <img
                            className="card-img-top"
                            src={
                              item.Id != "99690"
                                ? `/player-images/${item.Id}.jpg`
                                : `/player-images/dummy.png`
                            }
                            alt="Card image cap"
                          />
                          <div className="card-body">
                            <h3>{item.PFName}</h3>
                            <p>Skill {item.SkillDesc}</p>
                            <p>Value {"$" + item.Value}</p>
                            <h5>Upcoming Matches</h5>
                            {item.UpComingMatchesList.map((match) => {
                              return (
                                <div>
                                  <p>
                                    Date:{" "}
                                    {new Date(match.MDate).toLocaleString(
                                      "en-US",
                                      {
                                        timeZone: "Europe/London",
                                      }
                                    )}
                                    {/* Not able to find country of user from api's */}
                                  </p>
                                  <p>
                                    {match.CCode} VS {match.VsCCode}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    // </div>
                  );
                })}
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
