import React, {Component, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import Button from '@material-ui/core/Button';
import CustomScrollbars from 'util/CustomScrollbars';

class MenuNavLink extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { history } = this.props;
        const that = this;
        const pathname = `${history.location.pathname}`;// get current path

        const menuLi = document.getElementsByClassName('menu');
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].onclick = function (event) {

                const parentLiEle = that.closest(this, 'li');
                if (menuLi[i].classList.contains('menu') && parentLiEle !== null) {
                    event.stopPropagation();

                    if (menuLi[i].classList.contains('open')) {
                        menuLi[i].classList.remove('open', 'active');
                    } else {
                        menuLi[i].classList.add('open', 'active');
                    }
                } else {
                    for (let j = 0; j < menuLi.length; j++) {
                        const parentLi = that.closest(this, 'li');
                        if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
                            menuLi[j].classList.remove('open');
                        } else {
                            if (menuLi[j].classList.contains('open')) {
                                menuLi[j].classList.remove('open');
                            } else {
                                menuLi[j].classList.add('open');
                            }
                        }
                    }
                }
            }
        }

        const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
        try {
            const activeNav = this.closest(activeLi, 'ul'); // select closest ul
            if (activeNav.classList.contains('sub-menu')) {
                this.closest(activeNav, 'li').classList.add('open');
            } else {
                this.closest(activeLi, 'li').classList.add('open');
            }
        } catch (error) {

        }


    }

    componentWillReceiveProps(nextProps) {

        const { history } = nextProps;
        const pathname = `${history.location.pathname}`;// get current path

        const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
        try {
            const activeNav = this.closest(activeLi, 'ul'); // select closest ul
            if (activeNav.classList.contains('sub-menu')) {
                this.closest(activeNav, 'li').classList.add('open');
            } else {
                this.closest(activeLi, 'li').classList.add('open');
            }
        } catch (error) {

        }
    }

    closest(el, selector) {
        try {
            let matchesFn;
            // find vendor prefix
            ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
                if (typeof document.body[fn] === 'function') {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            let parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](selector)) {
                    return parent;
                }
                el = parent;
            }
        } catch (e) {

        }

        return null;
    }


    render(){

        return(
        <CustomScrollbars className=" scrollbar">
        <ul className="nav-menu">
           <li className="nav-header">
                <IntlMessages id="sidebar.main" />
            </li>
            <li className="nav-menu">
                <NavLink className="prepend-icon" to="/main/nrpm_main">
                    <i className="zmdi zmdi-home zmdi-hc-fw" />
                    <span className="nav-text">
                        <IntlMessages id="sidebar.dashboard" />
                        </span>
                 </NavLink>
            </li>
            <li className="nav-menu">
                <NavLink className="prepend-icon" to="/main/rnd_manageimport">
                    <i className="zmdi zmdi-format-list-bulleted zmdi-hc-fw" />
                    <span className="nav-text">
                        <IntlMessages id="การนำเข้าข้อมูล.ข้อมูล" />
                        </span>
                 </NavLink>
            </li>
            <li className="menu collapse-box">
                <Button>
                    <i className="zmdi zmdi-file zmdi-hc-fw" />
                    <span className="nav-text">
                        <IntlMessages id="การจัดการ.จัดการ" />
                    </span>
                </Button>
                <ul className="sub-menu">
                    <li>
                        <li className="nav-menu">
                        <NavLink className="prepend-icon" to="/main/RND_Summaryimport">
                        <i className="zmdi zmdi-chevron-right" /><IntlMessages id="เมนู.สรุปการนำเข้า" />
                        </NavLink>
                        <NavLink className="prepend-icon" to="/main/RnD_Management">
                            <i className="zmdi zmdi-chevron-right" /><span className="nav-text"><IntlMessages id="เมนู.ค้นหาข้อมูล" /></span>
                        </NavLink>
                        <NavLink className="prepend-icon" to="/main/RnDposition">
                            <i className="zmdi zmdi-chevron-right" /><span className="nav-text"><IntlMessages id="เมนู.จัดการตำแหน่งทางวิชาการ" /></span>
                        </NavLink>
                        <NavLink className="prepend-icon" to="/main/RnDAllowance">
                            <i className="zmdi zmdi-chevron-right" /><span className="nav-text"><IntlMessages id="เมนู.จัดการค่าตอบแทน" /></span>
                        </NavLink>
                        <NavLink className="prepend-icon" to="/main/RnDPeriodAge">
                            <i className="zmdi zmdi-chevron-right" /><span className="nav-text"><IntlMessages id="เมนู.จัดการช่วงอายุ" /></span>
                        </NavLink>
                        <NavLink className="prepend-icon" to="/main/RnD_ManageSalary">
                            <i className="zmdi zmdi-chevron-right" /><span className="nav-text"><IntlMessages id="เมนู.จัดการเงินเดือน" /></span>
                        </NavLink>
                        <NavLink className="prepend-icon" to="/main/RnD_ManageFTE">
                            <i className="zmdi zmdi-chevron-right" /><span className="nav-text"><IntlMessages id="เมนู.จัดการFTE" /></span>
                        </NavLink>
                        <NavLink className="prepend-icon" to="/main/RnDThesisPrivateBG">
                            <i className="zmdi zmdi-chevron-right" /><span className="nav-text"><IntlMessages id="เมนู.จัดการทุนส่วนตัวของวิทยานิพนธ์" /></span>
                        </NavLink>
                        <NavLink className="prepend-icon" to="/main/RnD_Department">
                            <i className="zmdi zmdi-chevron-right" /><span className="nav-text"><IntlMessages id="เมนู.จัดการประเภทหน่วยงาน" /></span>
                        </NavLink>
                        <NavLink className="prepend-icon" to="/main/RnD_Faculty">
                            <i className="zmdi zmdi-chevron-right" /><span className="nav-text"><IntlMessages id="เมนู.จัดการกลุ่มหน่วนงานย่อย" /></span>
                        </NavLink>
                        </li>
                    </li>
                    </ul>
            </li>
            <li className="menu collapse-box">
                <Button>
                    <i className="zmdi zmdi-file zmdi-hc-fw" />
                    <span className="nav-text">
                        <IntlMessages id="ระบบรายงาน.รายงาน" />
                    </span>
                </Button>
                <ul className="sub-menu">
                    <li>
                        <li className="nav-menu">
                        <NavLink className="prepend-icon" to="/main/RnD_ReportList">
                        <i className="zmdi zmdi-chevron-right" /><IntlMessages id="ระบบรายงาน.รายงานสรุปข้อมูล" />
                        </NavLink>
                        <NavLink className="prepend-icon" to="/main/Projectbin">
                            <i className="zmdi zmdi-chevron-right" /><span className="nav-text"><IntlMessages id="ระบบรายงาน.รายงานแบบเลือกคอลัมน์" /></span>
                        </NavLink>
                        </li>
                    </li>
                </ul>
                <li className="nav-menu">
                <NavLink className="prepend-icon" to="/main/Department_Coordinator">
                    <i className="zmdi zmdi-file zmdi-hc-fw" />
                    <span className="nav-text">
                        <IntlMessages id="จัดการเจ้าหน้าที่" />
                        </span>
                 </NavLink>
            </li>
            </li>
            <li className="menu collapse-box">
            <li className="menu collapse-box">
            <li className="menu collapse-box">
                    <li className="nav-header">
                    <IntlMessages id="จำนวนผู้ใช้งาน.ผู้ใช้งาน" />
                    </li>
        </li>
             <br/><br/><center><label>2 &nbsp;<i class="zmdi zmdi-account">&nbsp;คน</i></label></center>          
        </li>
            <div style={{height:200}}>
            </div>
        </li>
        </ul>
        </CustomScrollbars>
        )
    }
}

export default withRouter(MenuNavLink);