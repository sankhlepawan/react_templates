package com.yash.booking.util;

public class SecurityConstants {

    public static final long ACCESS_TOKEN_VALIDITY_SECONDS = 1*60*60;
    public static final String SIGNING_KEY = "roombookingyashtechinternal";
    public static final String TOKEN_PREFIX = "Bearer";
    public static final String HEADER_STRING = "Authorization";
    public static final String AUTHORITIES_KEY = "roles";
    public static final long EXPIRATION_TIME = 1*60*60; 
    public static final String TOKEN_SECRET = "jf9i4jgu83nfl0jfu57ejf7";
	public static final String SIGN_UP_URL = "/users";
	public static final String GET_REQ = "/users";
}
