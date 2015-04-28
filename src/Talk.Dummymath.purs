module Talk.Spec where

import Test.Spec (describe, pending)
import Test.Spec.Node


runtests = runNode do
  describe "Dummymath" do
    describe "quadruple" do
      pending "We should implement a test for quadruple!"
