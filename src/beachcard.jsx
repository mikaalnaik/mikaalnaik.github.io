import React, {Component} from 'react';




class BeachCard extends Component {



  render(){
    console.log(this.props.beachData);
    return <div className='grid-container'>
      {this.props.beachData.map(p =>
        <div key={p.beachId}
          className='BeachCard'>
          <div className='beachName'>
          {p.beachName}
        </div>
          Ecoli
          <div className='ecoli'>
            {p.eColi}

          </div>
          ppm
<br/> <br/>
          <div className='sampleDate'>
Sample Date:<br/>
            {p.date}
          </div>
        </div>
      )}
    </div>;
  }
}

export default BeachCard;

//
// <div className="BeachCard">
// <div className='cardheader'>
//   Sunnyside
// </div>
// <div className="ecoli">14</div>
// <div className='ppm'>
//   ppm</div>
// ecoli it's safe to swim!
//
// </div>
