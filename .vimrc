set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" 導入したいプラグインを以下に列挙
" Plugin '[Github Author]/[Github repo]' の形式で記入
Plugin 'airblade/vim-gitgutter'
Plugin 'alpaca-tc/vim-endwise'
Plugin 'scrooloose/syntastic'
Plugin 'ruby-matchit'


call vundle#end()
filetype plugin indent on

set number
set tabstop=2
set autoindent
set shiftwidth=2

