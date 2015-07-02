# install-chrome-dialog

Nowadays it's very common to not support any more old browsers. Still, when a user with an IE7 comes to visit your
website it's not really user friendly to display a blank page. This small script simply displays a message explaining
the problem and propose the user to download Google Chrome.

To use it, just put this code at the bottom of your web page:

    <!--[if lt IE 10]>
    <script src="https://cdn.rawgit.com/nicolas-van/install-chrome-dialog/0.1.0/install-chrome-dialog.min.js"></script>
    <script>installChrome();</script>
    <![endif]-->

Currently this script is only tested using the emulation mode of a recent IE. If you have VMs with old IEs and want
to test it, I'll gladly accept any merge proposal to improve the support.