import React, { memo } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected.js';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import data from './data';
import styled from 'styled-components';

const ForceChart = ({ setModal }) => {
  am4core.ready(function() {
    am4core.useTheme(am4themes_animated);

    const chart = am4core.create('chartdiv', am4plugins_forceDirected.ForceDirectedTree);
    const networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    chart.data = [
      {
        name: 'Minji Choi',
        children: [
          {
            name: 'Profile',
            children: [
              { name: data.profile.career.title, value: 700, content: data.profile.career.content},
              { name: data.profile.about.title, value: 3000, content: data.profile.about.content}
            ]
          },
          {
            name: 'Contact',
            children: [
              { name: data.contact.github.title, value: 800, content: data.contact.github.content},
              { name: data.contact.homepage.title, value: 800, content: data.contact.homepage.content},
              { name: data.contact.phone.title, value: 1000, content: data.contact.phone.content},
              { name: data.contact.email.title, value: 1000, content: data.contact.email.content}
            ]
          },
          {
            name: 'Project',
            children: [
              { name: data.project1.title, value: 3000, content: data.project1.content},
              { name: data.project2.title, value: 3500, content: data.project2.content}
            ]
          },
          {
            name: 'Skills',
            children: [
              {name: data.skills.education.title, value: 700, content: data.skills.education.content},
              {name: data.skills.frontEnd.title, value: 700, content: data.skills.frontEnd.content},
              {name: data.skills.backEnd.title, value: 700, content: data.skills.backEnd.content},
            ]
          }
        ]
      }
    ];

    networkSeries.dataFields.value = 'value';
    networkSeries.dataFields.name = 'name';
    networkSeries.dataFields.children = 'children';
    networkSeries.nodes.template.tooltipText = '{name}';
    networkSeries.nodes.template.fillOpacity = 1;
    networkSeries.nodes.template.togglable = false;

    networkSeries.manyBodyStrength = -20;
    networkSeries.links.template.strength = 0.8;
    networkSeries.minRadius = am4core.percent(2);

    networkSeries.nodes.template.label.text = '{name}'
    networkSeries.fontSize = 20;

    const hl = networkSeries.nodes.template.states.create('selected');
    hl.properties.fill = am4core.color('#c55');

    let selectedNode;
    networkSeries.nodes.template.events.on('hit', function(ev) {
      if(ev.target.dataItem.level === 2) {
        const data = ev.target.dataItem.dataContext;
        const { name, content } = data;
        setModal({title: name, content, isDisplay: true });
      }
      if (selectedNode === ev.target) {
        selectedNode.fill = selectedNode.defaultState.properties.fill;
        selectedNode = undefined;
      }
      else {
        if (selectedNode) {
          selectedNode.fill = selectedNode.defaultState.properties.fill;
        }
        selectedNode = ev.target;
        selectedNode.setState('selected');
      }
    });
  });

  return (
    <>
      <ChartWrapper id='chartdiv'/>
    </>
  );
};

const ChartWrapper = styled.div`
  width: 100%;
  height:550px;
  max-width:100%;
`;

export default memo(ForceChart);
