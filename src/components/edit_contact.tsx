import {

    redirect,
} from "react-router-dom";
import ContentLoader from "react-content-loader"
import Skeleton from 'react-loading-skeleton'

import React, { Component } from "react";
import { useState, useEffect } from "react";

import { updateContact } from ".././components/contact";
import { Box } from "@mui/material";
import { Edit } from "@mui/icons-material";

interface State {
    display: boolean;
}
export const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    ><Skeleton /> // Simple, single-line loading skeleton
        <Skeleton count={5} /> // Five-line loading skeleton
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="20" cy="20" r="20" />
    </ContentLoader>
)



export default function EditContact() {
    const [loading, setLoading] = useState(false);
    var [display, setDisplay] = useState({
        display: true
    })
    const updateDisplay = () => {
        setDisplay(previousState => {
            return { ...previousState, display: display.display == true ? false : true }
        });
    }

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    if (loading == false){
        return <form method="post" id="contact-form">
        <p>
            <span>Name</span>
            <input
                placeholder="First"
                aria-label="First name"
                type="text"
                name="first"

            />
            <input
                placeholder="Last"
                aria-label="Last name"
                type="text"
                name="last"
            />
        </p>
        <Box sx={{
            display: display.display ? 'inline' : 'none'
        }}>
            <label>
                <span  >Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@jack"
                />

            </label>
        </Box>
        <label>
            <span>Avatar URL</span>
            <input
                placeholder="https://example.com/avatar.jpg"
                aria-label="Avatar URL"
                type="text"
                name="avatar"
            />
        </label>
        <label>
            <span>Notes</span>
            <textarea
                name="notes"
                rows={6}
            />
        </label>
        <p>
            <button type="submit">Save</button>
            <button type="button" onClick={updateDisplay}>Cancel</button>
        </p>
        </form>}
    else
    return <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >

        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="20" cy="20" r="20" />
    </ContentLoader>
}


export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}
setInterval(() => { return <h1>ayman</h1> }, 1000);
