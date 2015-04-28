module Talk.Spec where

import Test.Spec (describe, pending, it)
import Test.Spec.Node
import Test.Spec.Assertions

import Talk.Dummymath

runtests = runNode do
  describe "Dummymath" do
    describe "quadruple" do
      it "should quadruple a number" do
        quadruple 3 `shouldEqual` 12
    describe "even" do
      it "should return true for eval number" do
        even 24 `shouldEqual` true
      it "should return false for odd number" do
        even 23 `shouldEqual` false
