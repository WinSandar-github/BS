<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'createCustomer',
        'getCustomer',
        'createIncome',
        'getIncome',
        'showIncomeInfo',
        'updateIncome',
        'deleteIncome',
        'createIncomeDetail',
        'getIncomeDetailByIncomeId',
        'createOutcome',
        'getOutcome',
        'showOutcomeInfo',
        'updateOutcome',
        'deleteOutcome',
        'createOutcomeDetail',
        'getOutcomeDetailByOutcomeId',
        'createUser',
        'getUser',
        'showUserInfo',
        'updateUser',
        'deleteUser',
        'loginValidate',
        'getTotal',
        'showCustomerInfo',
        'updateCustomer',
        'deleteCustomer',
        'createPayment',
        'getPaymentDetail',
        'getCreditList',
        'getPaymentDetailBypaymentId',
<<<<<<< HEAD
        'getPriceByPlan'
=======
        'createPlan',
        'getPlan'
>>>>>>> f029b3755995d3b7ec1ef701ab72994ea23df36b
    ];
}
