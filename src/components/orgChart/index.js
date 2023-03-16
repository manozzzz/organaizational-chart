import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
// import {box} from '@mui/material';
const Chart = () => {
  const StyledNode = styled.div`
    padding: 25px;
    border-radius: 4px;
    display: inline-block;
    border: 5px solid black;
  `
  const data = [
    {
      name: "Manoj",
      designation: "CEO",
      children: [
        {
          name: "Vivek",
          designation:"vicepresident",
          departmemt:"Finance",
          children:[
            {
            name: "Ross",
            designation:"Cheif accountant",
            departmemt:"Manufacturing",},
            {
              name: "Joey",
              designation:"budget analyst",
              departmemt:"humanresources",
            }
          ]
        },
        {
          name: "Kishore",
          designation:"vicepresident",
          departmemt:"Manufacturing",
          children:[
              {
              name: "Monica",
              designation:"plant superindent",
              departmemt:"Manufacturing",},
              {
                name: "Phoebe",
                designation:"maintence superindent",
                departmemt:"Manufacturing",
              }
            ]
        },
        {
          name: "Harish",
          designation:"Director",
          department:"humanresorce",
          children:[
            {
            name: "cooper",
            designation:"Training Specialist",
            departmemt:"Manufacturing",},
            {
              name: "Bob",
              designation:"Benifits administrator",
              departmemt:"Manufacturing",
            }
          ]
         
        },
      ],
    },
  ];

  return (
    <div>
      
      <Tree 
        lineWidth={"6px"}
        lineColor={"black"}
        lineBorderRadius={"1px"}
        label={<StyledNode>{`${data[0].name}-${data[0].designation}`}</StyledNode>}
      >
        <TreeNode label={<StyledNode>{`${data[0].children[0].name }-${data[0].children[0].designation }`}</StyledNode>}>
        <TreeNode label={<StyledNode>{`${data[0].children[0].children[0].name}-${data[0].children[0].children[0].designation}`}</StyledNode>}> 
        <TreeNode label={<StyledNode>x-employee</StyledNode>}></TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode>{`${data[0].children[0].children[1].name}-${data[0].children[0].children[1].designation}`}</StyledNode>}>
        <TreeNode label={<StyledNode>y-employee</StyledNode>} ></TreeNode>  
        </TreeNode>
        </TreeNode>

        <TreeNode label={<box><StyledNode>{`${data[0].children[1].name}-${data[0].children[1].designation }`}</StyledNode></box>}>
        <TreeNode label={<StyledNode>{`${data[0].children[1].children[0].name}-${data[0].children[1].children[0].designation}`}</StyledNode>}> 
        <TreeNode label={<StyledNode>z-employee</StyledNode>}></TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode>{`${data[0].children[1].children[1].name}-${data[0].children[1].children[1].designation}`}</StyledNode>}> 
        <TreeNode label={<StyledNode>u-employee</StyledNode>}></TreeNode>
        </TreeNode>
        </TreeNode>
        
        <TreeNode label={<StyledNode>{`${data[0].children[2].name}-${data[0].children[2].designation }`}</StyledNode>}>
        <TreeNode label={<StyledNode>{`${data[0].children[2].children[0].name}-${data[0].children[2].children[0].designation}`}</StyledNode>}> 
        <TreeNode label={<StyledNode>i-employee</StyledNode>}></TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode>{`${data[0].children[2].children[1].name}-${data[0].children[2].children[1].designation}`}</StyledNode>}> 
        <TreeNode label={<StyledNode>o-employee</StyledNode>}></TreeNode>
        </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  );
};

export default Chart;
