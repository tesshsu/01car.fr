<?php

namespace App\Constants;

abstract class Permission
{
    const ROLE_CREATE = 'ROLE_CREATE';
    const ROLE_VIEW = 'ROLE_VIEW';
    const ROLE_EDIT = 'ROLE_EDIT';
    const ROLE_DELETE = 'ROLE_DELETE';

    const USER_CREATE = 'USER_CREATE';
    const USER_VIEW = 'USER_VIEW';
    const USER_EDIT = 'USER_EDIT';
    const USER_DELETE = 'USER_DELETE';

    const COMPANY_VIEW_OTHER = 'COMPANY_VIEW_OTHER';

    const COMPANY_CREATE = 'COMPANY_CREATE';
    const COMPANY_VIEW = 'COMPANY_VIEW';
    const COMPANY_EDIT = 'COMPANY_EDIT';
    const COMPANY_DELETE = 'COMPANY_DELETE';
    const COMPANY_VALIDATE = 'COMPANY_VALIDATE';
    const COMPANY_EDIT_STORE_INFORMATION_WORK_PERIOD = 'COMPANY_EDIT_STORE_INFORMATION_WORK_PERIOD';

    const DEPARTMENT_CREATE = 'DEPARTMENT_CREATE';
    const DEPARTMENT_VIEW = 'DEPARTMENT_VIEW';
    const DEPARTMENT_EDIT = 'DEPARTMENT_EDIT';
    const DEPARTMENT_DELETE = 'DEPARTMENT_DELETE';

    const PRODUCT_CREATE = 'PRODUCT_CREATE';
    const PRODUCT_VIEW = 'PRODUCT_VIEW';
    const PRODUCT_EDIT = 'PRODUCT_EDIT';
    const PRODUCT_DELETE = 'PRODUCT_DELETE';

    const MENU_CREATE = 'MENU_CREATE';
    const MENU_VIEW = 'MENU_VIEW';
    const MENU_EDIT = 'MENU_EDIT';
    const MENU_DELETE = 'MENU_DELETE';

    const CART_CREATE = 'CART_CREATE';
    const CART_VIEW = 'CART_VIEW';
    const CART_EDIT = 'CART_EDIT';
    const CART_DELETE = 'CART_DELETE';

    const ORDER_CREATE = 'ORDER_CREATE';
    const ORDER_VIEW = 'ORDER_VIEW';
    const ORDER_EDIT = 'ORDER_EDIT';
    const ORDER_DELETE = 'ORDER_DELETE';

    public static $permissions_list = array(
        self::ROLE_CREATE,
        self::ROLE_VIEW,
        self::ROLE_EDIT,
        self::ROLE_DELETE,

        self::USER_CREATE,
        self::USER_VIEW,
        self::USER_EDIT,
        self::USER_DELETE,

        self::COMPANY_VIEW_OTHER,
        self::COMPANY_CREATE,
        self::COMPANY_VIEW,
        self::COMPANY_EDIT,
        self::COMPANY_DELETE,
        self::COMPANY_VALIDATE,
        self::COMPANY_EDIT_STORE_INFORMATION_WORK_PERIOD,

        self::DEPARTMENT_CREATE,
        self::DEPARTMENT_VIEW,
        self::DEPARTMENT_EDIT,
        self::DEPARTMENT_DELETE,

        self::PRODUCT_CREATE,
        self::PRODUCT_VIEW,
        self::PRODUCT_EDIT,
        self::PRODUCT_DELETE,

        self::MENU_CREATE,
        self::MENU_VIEW,
        self::MENU_EDIT,
        self::MENU_DELETE,

        self::CART_CREATE,
        self::CART_VIEW,
        self::CART_EDIT,
        self::CART_DELETE,

        self::ORDER_CREATE,
        self::ORDER_VIEW,
        self::ORDER_EDIT,
        self::ORDER_DELETE,
    );

    public static function list()
    {
        return self::$permissions_list;
    }

}
