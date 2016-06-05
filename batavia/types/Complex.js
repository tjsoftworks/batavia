
/*************************************************************************
 * A Python complex type

 These are the operator to be implemented to match full python functionality:
 ['__abs__',
 '__add__',
 '__class__',
 '__coerce__',
 '__delattr__',
 '__div__',
 '__divmod__',
 '__doc__',
 '__eq__',
 '__float__',
 '__floordiv__',
 '__format__',
 '__ge__',
 '__getattribute__',
 '__getnewargs__',
 '__gt__',
 '__hash__',
 '__init__',
 '__int__',
 '__le__',
 '__long__',
 '__lt__',
 '__mod__',
 '__mul__',
 '__ne__',
 '__neg__',
 '__new__',
 '__nonzero__',
 '__pos__',
 '__pow__',
 '__radd__',
 '__rdiv__',
 '__rdivmod__',
 '__reduce__',
 '__reduce_ex__',
 '__repr__',
 '__rfloordiv__',
 '__rmod__',
 '__rmul__',
 '__rpow__',
 '__rsub__',
 '__rtruediv__',
 '__setattr__',
 '__sizeof__',
 '__str__',
 '__sub__',
 '__subclasshook__',
 '__truediv__',
 'conjugate',
 'imag',
 'real']
 *************************************************************************/

batavia.types.Complex = function() {
    function Complex(real,imag) {
        this.real = real;
        this.imag = imag;
    }

    Complex.__name__ = 'complex';
    Complex.prototype = Object.create(Object.prototype);

    Complex.prototype.constructor = Complex;

    /**************************************************
     * Javascript compatibility methods
     **************************************************/

    Complex.prototype.toString = function() {
        return "'(" + this.real.__str__() + "," + this.imag.__str__ + ")'";
    };

    Complex.prototype.valueOf = function() {
        return this.val;
    };

    /**************************************************
     * Type conversions
     **************************************************/

    Complex.prototype.__bool__ = function() {
        return this.real != 0.0 && this.imaginary !== 0.0;
    };

    Complex.prototype.__repr__ = function() {
        return this.__str__();
    };

    Complex.prototype.__str__ = function() {
        if (this.val === Math.round(this. val)) {
            return this.val + '.0';
        } else {
            return this.val.toString();
        }
    };

    /**************************************************
     * Comparison operators
     **************************************************/

    Complex.prototype.__lt__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__lt__ has not been implemented");
    };

    Complex.prototype.__le__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__le__ has not been implemented");
    };

    Complex.prototype.__eq__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__eq__ has not been implemented");
    };

    Complex.prototype.__ne__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__ne__ has not been implemented");
    };

    Complex.prototype.__gt__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__gt__ has not been implemented");
    };

    Complex.prototype.__ge__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__ge__ has not been implemented");
    };

    Complex.prototype.__contains__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__contains__ has not been implemented");
    };

    /**************************************************
     * Unary operators
     **************************************************/

    Complex.prototype.__pos__ = function() {
        throw new batavia.builtins.NotImplementedError("Complex.__pox__ has not been implemented");
    };
    Complex.prototype.__neg__ = function() {
        throw new batavia.builtins.NotImplementedError("Complex.__neg__ has not been implemented");
    };
    Complex.prototype.__not__ = function() {
        throw new batavia.builtins.NotImplementedError("Complex.__not__ has not been implemented");
    };
    Complex.prototype.__invert__ = function() {
        throw new batavia.builtins.NotImplementedError("Complex.__invert__ has not been implemented");
    };


    /**************************************************
     * Binary operators
     **************************************************/

    Complex.prototype.__pow__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__pow__ has not been implemented");
    };

    Complex.prototype.__div__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__div__ has not been implemented");
    };

    Complex.prototype.__floordiv__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__floordiv__ has not been implemented");
    };

    Complex.prototype.__truediv__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__truediv__ has not been implemented");
    };

    Complex.prototype.__mul__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__mul__ has not been implemented");
    };

    Complex.prototype.__mod__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__mod__ has not been implemented");
    };

    Complex.prototype.__add__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__add__ has not been implemented");
    };

    Complex.prototype.__sub__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__sub__ has not been implemented");
    };

    Complex.prototype.__getitem__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__getitem__ has not been implemented");
    };

    Complex.prototype.__lshift__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__lshift__ has not been implemented");
    };

    Complex.prototype.__rshift__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__rshift__ has not been implemented");
    };

    Complex.prototype.__and__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__and__ has not been implemented");
    };

    Complex.prototype.__xor__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__xor__ has not been implemented");
    };

    Complex.prototype.__or__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__or__ has not been implemented");
    };

    /**************************************************
     * Inplace operators
     **************************************************/

    Complex.prototype.__idiv__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__idiv__ has not been implemented");
    };

    Complex.prototype.__ifloordiv__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__ifloordiv__ has not been implemented");
    };

    Complex.prototype.__itruediv__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__itruediv__ has not been implemented");
    };

    Complex.prototype.__iadd__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__iadd__ has not been implemented");
    };

    Complex.prototype.__isub__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__isub__ has not been implemented");
    };

    Complex.prototype.__imul__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__imul__ has not been implemented");
    };

    Complex.prototype.__imod__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__imod__ has not been implemented");
    };

    Complex.prototype.__ipow__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__ipow__ has not been implemented");
    };

    Complex.prototype.__ilshift__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__ilshift__ has not been implemented");
    };

    Complex.prototype.__irshift__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__irshift__ has not been implemented");
    };

    Complex.prototype.__iand__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__iand__ has not been implemented");
    };

    Complex.prototype.__ixor__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__ixor__ has not been implemented");
    };

    Complex.prototype.__ior__ = function(other) {
        throw new batavia.builtins.NotImplementedError("Complex.__ior__ has not been implemented");
    };

    /**************************************************
     * Methods
     **************************************************/

    Complex.prototype.copy = function() {
        return new Complex(this.valueOf());
    };

    /**************************************************/

    return Complex;
}();
