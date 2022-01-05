import React from 'react';
import { TestIcon } from '../icon/TestIcon';
import { Button } from '../shared/button';
import { TYPES } from '../shared/types';
import { Wrapper } from '../shared/wrapper';
// import { default as logo } from '../../assets/test.svg';

export const Design = () => {
  return (
    <Wrapper flexDirection="col" gap="20px">
      <h1>Design System</h1>
      <hr />
      {/***** BUTTONS *****/}
      <Wrapper flexDirection="col" gap="20px">
        <h3>Buttons</h3>
        <Wrapper gap="20px">
          <Button type={TYPES.PRIMARY} text='Primary' onClick={() => console.log("Primary button clicked")} />
          <Button type={TYPES.PRIMARY} icon={<TestIcon />} text='Primary with icon' onClick={() => console.log("Primary button clicked")}/>
          <Button type={TYPES.PRIMARY} text='Primary disabled' onClick={() => console.log("Primary button clicked")} disabled/>
        </Wrapper>
        <Wrapper gap="20px">
          <Button type={TYPES.SECONDARY} text='Secondary' onClick={() => console.log("Secondary button clicked")} />
          <Button type={TYPES.SECONDARY} icon={<TestIcon />} text='Secondary with icon' onClick={() => console.log("Secondary button clicked")}/>
          <Button type={TYPES.SECONDARY} text='Secondary disabled' onClick={() => console.log("Secondary button clicked")} disabled/>
        </Wrapper>
        <Wrapper gap="20px">
          <Button type={TYPES.WHITE} text='White' onClick={() => console.log("White button clicked")} />
          <Button type={TYPES.WHITE} icon={<TestIcon />} text='White with icon' onClick={() => console.log("White button clicked")}/>
          <Button type={TYPES.WHITE} text='White disabled' onClick={() => console.log("White button clicked")} disabled/>
        </Wrapper>
        <Wrapper gap="20px">
          <Button type={TYPES.TERTIARY} text='Tertiary' onClick={() => console.log("Tertiary button clicked")} />
          <Button type={TYPES.TERTIARY} icon={<TestIcon />} text='Tertiary with icon' onClick={() => console.log("Tertiary button clicked")}/>
          <Button type={TYPES.TERTIARY} text='Tertiary disabled' onClick={() => console.log("Tertiary button clicked")} disabled/>
        </Wrapper>
        <Wrapper gap="20px">
          <Button type={TYPES.ERROR} text='Error' onClick={() => console.log("Error button clicked")} />
          <Button type={TYPES.ERROR} icon={<TestIcon />} text='Error with icon' onClick={() => console.log("Error button clicked")}/>
          <Button type={TYPES.ERROR} text='Error disabled' onClick={() => console.log("Error button clicked")} disabled/>
        </Wrapper>
        <Wrapper gap="20px">
          <Button type={TYPES.BONE} text='Bone' onClick={() => console.log("Bone button clicked")} />
          <Button type={TYPES.BONE} icon={<TestIcon />} text='Bone with icon' onClick={() => console.log("Bone button clicked")}/>
          <Button type={TYPES.BONE} text='Bone disabled' onClick={() => console.log("Bone button clicked")} disabled/>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}
