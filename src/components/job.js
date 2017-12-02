import React from 'react';
import { appStyle } from '../appStyle'

export const Job = (props) => {
  return (
    <div className="col-xs-12 col-md-6">
      <h3 style={appStyle.subheader}>
        {props.job.name}
      </h3>
      <h4>
        {props.job.title}&nbsp;&bull;&nbsp;
        {props.job.location}&nbsp;&bull;&nbsp;
        {props.job.startDate}&nbsp;&mdash;&nbsp;
        {props.job.endDate}
      </h4>
      <ul>
      {props.job.description.map((desc, i) =>
        <li key={i}>{desc}</li>
      )}
      </ul>
    </div>
  )
}